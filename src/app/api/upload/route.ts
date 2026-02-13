import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

// Allow larger files and longer timeouts
export const maxDuration = 60; // Increase to 60 seconds

export async function POST(request: Request) {
    try {
        console.log("Upload API: Request received");
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const bucket = formData.get('bucket') as string || 'banners';

        // Ignore client-provided path to ensure server-side uniqueness
        // const path = formData.get('path') as string; 

        if (!file) {
            console.error("Upload API: No file found in FormData");
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        console.log(`Upload API: Processing file ${file.name}, size: ${file.size}, type: ${file.type}`);
        const buffer = Buffer.from(await file.arrayBuffer());

        // Generate unique filename server-side to prevent collisions
        const fileExt = file.name.split('.').pop() || 'jpg';
        const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
        const fileName = `${uniqueId}.${fileExt}`;

        console.log(`Upload API: Uploading to Supabase bucket '${bucket}' as '${fileName}'...`);

        // Upload to Supabase Storage using Admin Client (Bypasses RLS)
        const { data, error } = await supabaseAdmin.storage
            .from(bucket)
            .upload(fileName, buffer, {
                contentType: file.type,
                upsert: false
            });

        if (error) {
            console.error('Upload API: Supabase Storage Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        console.log("Upload API: Upload successful", data);

        // Get Public URL
        const { data: { publicUrl } } = supabaseAdmin.storage
            .from(bucket)
            .getPublicUrl(fileName);

        console.log("Upload API: Public URL generated", publicUrl);

        return NextResponse.json({ url: publicUrl });

    } catch (error: any) {
        console.error('Upload API Critical Error:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
