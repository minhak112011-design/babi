# TEDDY LOVE — A Tiny Letter for Her

Một website tỏ tình nhỏ gọn, có gấu Teddy GIF chuyển động. Người nhận sẽ mở phong bì, đọc lá thư trước, rồi mới đến câu hỏi và hai lựa chọn trả lời.

## Chỉnh nội dung trước khi gửi

Mở `src/content/site-config.ts` và chỉnh:

- `senderName`: tên người gửi.
- `recipientName`: tên người nhận.
- `letter.paragraphs`: nội dung lá thư.
- `question.title`: câu hỏi tỏ tình.
- `question.yes` / `question.no`: chữ trên hai nút.
- `question.yesMessage` / `question.noMessage`: lời nhắn sau khi chọn.

Nội dung mặc định chỉ là lời nhắn mẫu nhẹ nhàng. Hãy thay bằng cách nói tự nhiên của bạn trước khi gửi cho cô ấy.

## Gấu Teddy GIF

Năm GIF Teddy động có sẵn trong `public/gifs/`:

- `bear-wave.gif` — gấu vẫy tay ở phần lá thư.
- `bear-heart.gif` — gấu ôm trái tim khi mở thư.
- `bear-flower.gif` — GIF dự phòng để dùng khi bạn muốn thay đổi giao diện.
- `bear-shy.gif` — gấu ngại ngùng ở nhánh trả lời không.
- `bear-hug.gif` — gấu ôm trái tim khi cô ấy đồng ý.

Bạn có thể thay GIF của mình nhưng hãy giữ nguyên tên file, hoặc sửa đường dẫn tương ứng trong `src/content/site-config.ts`. Dùng GIF có nền trong suốt, khung vuông, dung lượng nên dưới khoảng 1 MB để tải nhanh trên điện thoại.

Ứng dụng dùng thẻ `img` thông thường để trình duyệt phát GIF động. Script `scripts/generate-asset-manifest.mjs` tự kiểm tra tài nguyên trước khi chạy/build. Nếu file bị thiếu, website hiển thị hình minh họa dự phòng thay vì ảnh hỏng.

## Chạy trên máy tính

Cần Node.js 20.9 trở lên.

```bash
npm install
npm run dev
```

Mở địa chỉ được in trong terminal (thường là `http://localhost:3000`).

## Kiểm tra production

```bash
npm run build
npm run start
```

## Deploy lên Vercel

1. Đưa thư mục dự án lên một repository GitHub.
2. Vào Vercel, chọn **Add New → Project** và import repository.
3. Framework tự nhận là **Next.js**. Giữ nguyên Build Command mặc định (`next build`) và Output Directory mặc định.
4. Nhấn **Deploy**. Không cần API key hay biến môi trường.

Khi chỉnh nội dung hoặc thay GIF, commit và push lại repository; Vercel sẽ tự build phiên bản mới.

## Cấu trúc chính

```text
public/
  favicon.svg
  gifs/
    bear-wave.gif
    bear-heart.gif
    bear-flower.gif
    bear-shy.gif
    bear-hug.gif
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    ProposalExperience.tsx
    TeddyCharacter.tsx
    TeddyFallback.tsx
  content/
    asset-manifest.ts
    site-config.ts
scripts/
  generate-asset-manifest.mjs
```

## Ghi chú

- Website không gửi hay lưu lựa chọn của người nhận lên máy chủ.
- Không tự phát nhạc hoặc tải tài nguyên từ website bên ngoài.
- Có hỗ trợ `prefers-reduced-motion`.
- Nội dung và trạng thái tương tác chạy ở trình duyệt; không cần database hay API.
