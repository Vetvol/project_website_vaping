import { NextRequest, NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET() {
  try {
    const products = await sql`
      SELECT 
        id,
        flavor,
        description,
        ingredients,
        background_color,
        is_active,
        image_url,
        created_at,
        updated_at
      FROM products 
      WHERE is_active = true
      ORDER BY id ASC
    `
    return NextResponse.json({
      success: true,
      data: products
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Failed to fetch products' 
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { flavor, description, ingredients, background_color, is_active, image_url } = body

    const product = await sql`
      INSERT INTO products (flavor, description, ingredients, background_color, is_active, image_url)
      VALUES (${flavor}, ${description}, ${JSON.stringify(ingredients)}, ${background_color}, ${is_active}, ${image_url})
      RETURNING *
    `

    return NextResponse.json({
      success: true,
      data: product[0]
    })
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Failed to create product' 
    }, { status: 500 })
  }
}
