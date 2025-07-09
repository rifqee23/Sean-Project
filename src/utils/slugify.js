export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // hapus karakter spesial
    .replace(/\s+/g, "-") // ganti spasi jadi tanda -
    .replace(/--+/g, "-"); // hilangkan -- ganda
}
