# Sinh nhật Thiên Thanh

Trang web chúc mừng sinh nhật dành cho **Thiên Thanh - vợ iu của Anh Khôi**. Trang chạy hoàn toàn bằng HTML, CSS và jQuery, có nhạc nền, đèn, bóng bay, bánh sinh nhật, lời chúc tiếng Việt và bộ ảnh kỷ niệm xuất hiện tuần tự.

## Tính năng

- Các bước tương tác được mở lần lượt bằng nút điều khiển.
- Hiệu ứng bật đèn, phát nhạc, thả bóng bay và thắp nến.
- 20 ảnh kỷ niệm hiển thị theo lưới, giữ nguyên tỷ lệ và không cắt nội dung ảnh.
- Bố cục responsive cho desktop, mobile dọc và mobile ngang.
- Lời chúc sinh nhật bằng tiếng Việt dành riêng cho Thiên Thanh.

## Chạy trên máy

### Dùng Node.js

```bash
npm install
npm run server-node
```

### Dùng Python

```bash
python -m http.server 8081
```

Sau đó mở [http://localhost:8081](http://localhost:8081) trong trình duyệt.

## Cấu trúc chính

| Đường dẫn                            | Nội dung                                   |
| ------------------------------------ | ------------------------------------------ |
| `index.html`                         | Giao diện, lời chúc và thứ tự các hiệu ứng |
| `stylesheet.css`                     | Hiệu ứng, bố cục ảnh và responsive         |
| `effect.js`                          | Luồng tương tác của các nút và hoạt ảnh    |
| `cake.less`                          | Kiểu dáng bánh sinh nhật                   |
| `photos/`                            | 20 ảnh kỷ niệm                             |
| `.github/workflows/deploy-pages.yml` | Workflow triển khai GitHub Pages           |

## Thay ảnh kỷ niệm

Thay các tệp `photos/photo-01.jpg` đến `photos/photo-20.jpg` và giữ nguyên tên tệp. CSS dùng `object-fit: contain`, vì vậy ảnh ngang, ảnh vuông và ảnh dọc đều được co vừa khung mà không bị cắt.

## Triển khai GitHub Pages

Workflow sẽ chạy khi có thay đổi được đẩy lên nhánh `main`. Trước lần deploy đầu tiên, vào **Settings > Pages > Build and deployment** của repository và chọn **GitHub Actions** làm nguồn triển khai.

Địa chỉ sau khi GitHub Pages được bật:

<https://khoibui16.github.io/birthday_wife/>

## Tác giả

[KhoiBui16](https://github.com/KhoiBui16)
