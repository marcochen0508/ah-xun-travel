import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const bucket = formData.get('bucket') as string || 'banners';

        // Ignore client-provided path to ensure server-side uniqueness
        // const path = formData.get('path') as string; 

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        // Generate unique filename server-side to prevent collisions
        const fileExt = file.name.split('.').pop() || 'jpg';
        const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
        const fileName = `${uniqueId}.${fileExt}`;

        // Upload to Supabase Storage using Admin Client (Bypasses RLS)
        const { data, error } = await supabaseAdmin.storage
            .from(bucket)
            .upload(fileName, buffer, {
                contentType: file.type,
                upsert: false
            });

        if (error) {
            console.error('Supabase Storage Upload Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Get Public URL
        const { data: { publicUrl } } = supabaseAdmin.storage
            .from(bucket)
            .getPublicUrl(fileName);

        return NextResponse.json({ url: publicUrl });

    } catch (error: any) {
        console.error('Upload API Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
