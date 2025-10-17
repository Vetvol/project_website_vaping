import { NextRequest, NextResponse } from 'next/server'
import sql from '@/lib/db'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const productId = formData.get('productId') as string

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' 
      }, { status: 400 })
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File too large. Maximum size is 5MB.' 
      }, { status: 400 })
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const fileExtension = file.name.split('.').pop()
    const filename = `product_${timestamp}.${fileExtension}`
    const filePath = join(uploadsDir, filename)

    // Save file to disk
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(filePath, buffer)

    // Save image info to database
    const imageUrl = `/uploads/${filename}`
    const imageRecord = await sql`
      INSERT INTO images (filename, original_name, file_path, file_size, mime_type)
      VALUES (${filename}, ${file.name}, ${filePath}, ${file.size}, ${file.type})
      RETURNING *
    `

    // If productId is provided, update the product with the new image
    if (productId) {
      await sql`
        UPDATE products 
        SET image_url = ${imageUrl}
        WHERE id = ${parseInt(productId)}
      `
    }

    return NextResponse.json({
      success: true,
      data: {
        id: imageRecord[0].id,
        filename: imageRecord[0].filename,
        originalName: imageRecord[0].original_name,
        url: imageUrl,
        size: imageRecord[0].file_size,
        mimeType: imageRecord[0].mime_type,
        uploadedAt: imageRecord[0].uploaded_at
      }
    })

  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Failed to upload image' 
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    const images = await sql`
      SELECT 
        id,
        filename,
        original_name,
        file_path,
        file_size,
        mime_type,
        uploaded_at
      FROM images 
      ORDER BY uploaded_at DESC
    `

    return NextResponse.json({
      success: true,
      data: images.map(img => ({
        id: img.id,
        filename: img.filename,
        originalName: img.original_name,
        url: `/uploads/${img.filename}`,
        size: img.file_size,
        mimeType: img.mime_type,
        uploadedAt: img.uploaded_at
      }))
    })

  } catch (error) {
    console.error('Error fetching images:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Failed to fetch images' 
    }, { status: 500 })
  }
}
