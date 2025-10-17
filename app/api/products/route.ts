import { NextRequest, NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET() {
  try {
    const products = await sql`
      SELECT * FROM products 
      ORDER BY created_at DESC
    `
    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, series, status, stock } = body

    const product = await sql`
      INSERT INTO products (name, description, series, status, stock)
      VALUES (${name}, ${description}, ${series}, ${status}, ${stock})
      RETURNING *
    `

    return NextResponse.json(product[0])
  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
