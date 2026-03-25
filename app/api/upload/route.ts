import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("file") as File;
  const key = data.get("key") as string;

  const fileName = Date.now() + ".bin";

  await supabase.storage.from("files").upload(fileName, file);

  const fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/files/${fileName}`;

  const id = Math.random().toString(36).substring(2);

  await supabase.from("vaults").insert({
    id,
    file_url: fileUrl,
    key,
    expires_at: Date.now() + 3600000,
  });

  return Response.json({ url: `/vault/${id}` });
}
