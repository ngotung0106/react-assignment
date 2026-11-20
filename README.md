# FPT Aptech React Exam Project

## Chạy dự án
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## JSON theo mẫu đề thi
`src/data/objects.json`:
- `id`
- `object`
- `description`
- `image`

`src/data/subjects.json`:
- `id`
- `subject`
- `description`
- `image`

Hai file JSON được import trực tiếp trong React và render bằng `.map()`.

## Hình ảnh
Banner mẫu trong đề đã được cắt từ ảnh tham chiếu và đặt sẵn tại `public/image/banner.png`.
Ông chỉ cần tự thêm:
- `high-school-student.png`
- `student.png`
- `working.png`
- `reactjs.png`
- `php.png`
- `net.png`

Tất cả đặt trong `public/image/`.
