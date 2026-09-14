# BỘ QUY TẮC THIẾT KẾ & CHUẨN MỰC HỆ THỐNG TRẮC NGHIỆM HÓA HỌC 12
*Biên soạn phục vụ giảng dạy môn Hóa học THPT (Chương trình Giáo dục phổ thông 2018)*  
**Tác giả định hướng & chuẩn mực sư phạm:** Thầy Trần Mạnh Tùng  
**Bộ sách:** Hoá học 12 – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam)  
*(Bộ quy tắc chuẩn mực hợp nhất toàn diện duy nhất của hệ thống Hóa học)*

---

## 1. QUY TẮC BẮT BUỘC: KIỂM CHỨNG BẰNG HÌNH ẢNH CUỐI CÙNG (MANDATORY FINAL VISUAL VERIFICATION)
- **Bắt buộc 100%:** Sau bất kỳ thao tác chỉnh sửa mã nguồn, cập nhật CSS, cấu trúc dữ liệu câu hỏi hay tính năng mới nào, **BẮT BUỘC** phải chụp ảnh màn hình bằng trình duyệt thực tế (Chrome Headless) và gọi công cụ view_file để kiểm tra trực quan giao diện thực tế trước khi kết luận hoàn thành công việc.
- **Tuyệt đối không suy đoán:** Không bao giờ kết luận hay khẳng định lỗi đã được xử lý mà không có ảnh chụp kiểm chứng thực tế tại bước cuối cùng.
- **Kiểm thử đa trạng thái:** Phải kiểm tra ảnh chụp tại cả trạng thái tĩnh bình thường, trạng thái tương tác, trạng thái điều hướng và trạng thái hiển thị kết quả Đúng / Sai.

---

## 2. NGUYÊN TẮC SƯ PHẠM & CẤU TRÚC ĐỀ THI (CHUẨN BỘ GD&ĐT 2025)

### 2.1. Đa dạng hóa 4 định dạng câu hỏi đánh giá năng lực
Không dùng trắc nghiệm 1 phương án đơn điệu, tích hợp 4 hình thức tương tác hiện đại:
1. **Trắc nghiệm nhiều lựa chọn (MCQ):** Đầy đủ 4 phương án A, B, C, D rõ ràng, không trùng lặp, không lộ đáp án. Đảo ngẫu nhiên vị trí đáp án đúng qua thuật toán Fisher-Yates mỗi khi làm bài; xóa bỏ hoàn toàn hiện tượng thiên lệch đáp án.
2. **Trắc nghiệm Đúng / Sai (TF - Cụm 4 nhận định độc lập):** Yêu cầu học sinh phân tích 4 mệnh đề a), b), c), d) từ một ngữ cảnh khoa học, tình huống thực tế hóa học, thí nghiệm hoặc bảng số liệu/sơ đồ chuyển hóa.
3. **Ghép nối tương ứng (Match Pair):** Ghép đôi giữa chất/hiện tượng thực tiễn/ứng dụng công nghiệp (cột A) với bản chất hóa học/phương trình phản ứng/nhóm chức/tính chất đặc trưng tương ứng (cột B). Tiền tố đơn nhất (1., 2. cho Cột A; A., B. cho Cột B), không bao giờ lặp tiền tố 1. 1. hay A. A..
4. **Điền khuyết khép kín (Tap to Drop / Word Bank):** Học sinh chọn từ khóa chính xác trong ngân hàng từ để gắn vào các vị trí trống của định nghĩa, quy tắc hóa học, danh pháp hoặc phương trình. Token hóa 2 bước độc lập %%%SLOT_i%%%, không lồng thẻ, không sót ký tự thô [blank].

### 2.2. Chuẩn hóa thang điểm phân hóa của Bộ GD&ĐT
Với câu hỏi Đúng/Sai dạng chùm 4 ý, áp dụng chuẩn thang điểm bậc thang:
* Đúng 1 ý: **+0,10 điểm**
* Đúng 2 ý: **+0,25 điểm**
* Đúng 3 ý: **+0,50 điểm**
* Đúng trọn vẹn cả 4 ý: **+1,00 điểm**

### 2.3. Nguyên tắc sư phạm trong phản hồi và phân tích kết quả
* **Hiện đáp án trước, giải thích sau:** Đầu khung phản hồi luôn in hoa, đậm thẻ đáp án đúng để học sinh đối chiếu ngay lập tức (Ví dụ: ĐÁP ÁN ĐÚNG: Đáp án B (CH₃COOC₂H₅)).
* **Trình bày rõ 3 bước tư duy:** Lời giải trình bày chặt chẽ theo trình tự: Hiện tượng / Bản chất hóa học -> Phương trình phản ứng / Biến đổi đại số -> Kết luận và đơn vị.
* **Tích hợp Bảng Rà Soát Chi Tiết (Exam Review Table):** Sau khi hoàn thành chế độ thi thử, tự động hiển thị bảng đối chiếu 10 câu gồm: Trạng thái kết quả, Điểm đạt được, Lựa chọn của học sinh và Đáp án chuẩn của giáo viên.

---

## 3. QUY TẮC HIỂN THỊ CÔNG THỨC HÓA HỌC & TOÁN HỌC
- **Đồng bộ màu sắc tuyệt đối (color: inherit; & currentColor):**
  - Các phần tử phân số (.fraction, .numerator, .denominator) và ký hiệu toán (.math-sym) phải luôn dùng color: inherit; và gạch phân số border-bottom: 1.6px solid currentColor;.
  - Trong tiêu đề câu hỏi và các phương án trắc nghiệm: Phân số và công thức hóa học phải hiển thị đồng màu trắng hoàn toàn với văn bản xung quanh (#ffffff / #f8fafc).
  - Khi hiển thị kết quả đáp án:
    - **Đáp án ĐÚNG:** Toàn bộ tử số, mẫu số, ký hiệu và công thức tự động mang màu xanh ngọc #a7f3d0.
    - **Đáp án SAI:** Toàn bộ tử số, mẫu số, ký hiệu và công thức tự động mang màu đỏ nhạt #fecaca.
- **Khung công thức & Phương trình trong Lời giải (.formula-box):**
  - Phương trình hóa học nằm trong khung lời giải chi tiết được đặt trong .formula-box mang màu xanh cyan #38bdf8 làm điểm nhấn sư phạm.
- **Chuẩn hóa Unicode HTML thuần 100% (Zero Raw LaTeX):**
  - Không được dùng mã LaTeX thô ($...$, \rightarrow, \rightleftharpoons, \text{...}) trong dữ liệu JSON. Mọi công thức hóa học phải được định dạng bằng Unicode chuẩn và thẻ HTML:
    - Chỉ số nguyên tử dùng thẻ `<sub>` (ví dụ: `C<sub>2</sub>H<sub>5</sub>OH`, `H<sub>2</sub>SO<sub>4</sub>`, `CuSO<sub>4</sub>`).
    - Điện tích ion và số oxi hoá dùng thẻ `<sup>` (ví dụ: `Fe<sup>3+</sup>`, `SO<sub>4</sub><sup>2-</sup>`, `MnO<sub>4</sub><sup>-</sup>`).
    - Mũi tên phản ứng: `→` (một chiều), `⇌` (thuận nghịch), `↑` (khí thoát), `↓` (kết tủa).
  - Ứng dụng chạy 100% offline, không phụ thuộc thư viện MathJax/KaTeX bên ngoài.

---

## 4. QUY TẮC ĐIỀU HƯỚNG BẰNG BÀN PHÍM (KEYBOARD NAVIGATION)
- **Phím điều hướng:**
  - Phím Mũi tên xuống (ArrowDown) hoặc Mũi tên phải (ArrowRight): Chuyển sang câu hỏi tiếp theo (nextQuestion()).
  - Phím Mũi tên lên (ArrowUp) hoặc Mũi tên trái (ArrowLeft): Lùi về câu hỏi trước đó (prevQuestion()).
- **Cơ chế an toàn & Cách ly:**
  - Đang ở Câu 1: Bấm phím Lên giữ nguyên Câu 1, không bị âm chỉ số.
  - Đang ở Câu 10 (câu cuối): Bấm phím Xuống không tự ý nộp bài thi đột ngột trong chế độ Thi thử; trong chế độ Luyện tập chỉ xem bảng điểm tổng kết khi đã kiểm tra xong.
  - Vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong ô input, textarea hoặc dropdown select.
  - Chặn cuộn trang ngoài ý muốn (e.preventDefault()).

---

## 5. NGUYÊN TẮC THIẾT KẾ GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (UX/UI)

### 5.1. Kiến trúc Card Trọng Tâm & Không Cần Cuộn Chuột (Centered Glassmorphic Assessment Card)
* **Xóa bỏ hoàn toàn khoảng trống thừa (Zero Wasted Space):** Khung làm bài được đóng gói trong một Card trung tâm viền kính mờ phát quang vi tế, căn giữa hoàn hảo cả chiều ngang lẫn chiều dọc màn hình.
* **Không cần cuộn chuột trên màn hình ngang (PC, Laptop, iPad, Landscape mobile):** Chiều cao thẻ làm bài tự động khống chế trong giới hạn max-height: calc(100vh - 84px) với thanh cuộn nội bộ mượt mà chỉ khi lời giải mở dài.
* **Tự động thích ứng trên điện thoại xoay dọc (Portrait):** Chuyển đổi thành 1 cột dọc duy nhất và mở thanh cuộn trang tự nhiên giúp học sinh thao tác bằng 1 tay thuận tiện.

### 5.2. Cơ chế phân tách thông minh theo định dạng câu hỏi
* **Câu hỏi không có đồ thị (.quiz-card-unified, max-width: 960px):** Đề bài trang trọng phía trên; 4 phương án dàn thành lưới 2 cột cân đối bên dưới; nút "Kiểm tra kết quả 🎯" gắn liền sát dưới phương án, loại bỏ hoàn toàn khoảng đen vô nghĩa.
* **Câu hỏi có đồ thị vector SVG (.quiz-card-split, max-width: 1240px):** Chia lưới 2 cột cân xứng (1.15fr : 0.85fr) với cơ chế tự động duỗi thẳng (align-items: stretch):
  * **Cột trái:** Đề bài + Hình vẽ vector SVG mở rộng chiếm trọn vẹn không gian trống.
  * **Cột phải:** Phương án tương tác + Cụm nút hành động + Khung giải thích chi tiết mở dòng chảy bên dưới.

### 5.3. Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header)
* **Cấu trúc 1 Hàng Ngang Bất Biến (flex-wrap: nowrap):** Toàn bộ thanh Header gom trọn trên 1 hàng duy nhất trên PC, Laptop và iPad, hỗ trợ cuộn chuột ngang mượt mà, không bao giờ bị rớt dòng:
  * **Cụm quản trị & cấu hình (Bên trái):** [👨‍🏫 Thầy Trần Mạnh Tùng ✏️] (có thể nhấp đổi tên giáo viên và lưu localStorage) + [Menu chọn 30 bài học ⌄] + [A- | % | A+] (Bộ chỉnh cỡ chữ) + [📊 Học Bạ] (Bảng điểm tiến độ).
  * **Cụm thi đấu & điều hướng (Bên phải):** [📘 Luyện Tập | ⏱️ Thi Thử] + [Đồng hồ đếm ngược kỹ thuật số] + [Mini-map 1..10] (Chuyển câu tức thì chỉ với 1 chạm).
* **Tối giản hóa tối đa & Chuẩn nhận diện:** Giữ thanh Header luôn thanh thoát, hiện đại và tập trung 100% vào việc học.

### 5.4. Hệ thống Typography Chuẩn Tiếng Việt & Bộ Điều Khiển Cỡ Chữ Linh Hoạt (Font Scaler)
* **Font Stack Hiện Đại & Chuẩn Mực Glyph Tiếng Việt:**
  - Tuyệt đối không đưa `'SF Pro Display'` vào đầu font stack vì trên Windows có thể thiếu glyph tiếng Việt.
  - Chuẩn hóa Font Stack tối tân: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif` kết hợp nhúng Google Fonts `Plus Jakarta Sans` (`wght@400;500;600;700;800;900`).
  - **Bắt buộc kế thừa phông cho Form Controls & Nút bấm:**
    `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
  - **Quy chuẩn độ đậm & Kiểu chữ tiếng Việt:** Dùng `font-weight: 800` hoặc `700`, và dùng Title Case chuẩn mực (ví dụ: *"Bắt Đầu Đấu Trường Ngay"*).
* **Bộ Phím Tăng Giảm Kích Cỡ Chữ Tức Thời (A- | % | A+):** Cung cấp 4 mức tỷ lệ hiển thị (90% - 100% - 115% - 130%) lưu tự động vào localStorage.setItem('HOA12_FONT_SCALE_IDX'). Toàn bộ văn bản, công thức, bảng Đúng/Sai và lời giải đều co giãn mượt mà theo biến --font-scale.

---

## 6. NGUYÊN TẮC KỸ THUẬT: ĐỒ THỊ VECTOR SVG & CÔNG THỨC HÓA HỌC THUẦN
* **100% Không dùng ảnh raster (.png, .jpg):** Tránh hiện tượng mờ nhòe hoặc mất liên kết ảnh khi chia sẻ offline.
* **Đồ họa SVG hóa học phong cách Dark Neon:** Tự vẽ trực tiếp bằng các thẻ <svg>, <line>, <circle>, <path>, <rect>, <polygon> với màu sắc phát quang tương phản cao (#38bdf8, #34d399, #f43f5e, #fbbf24, #a855f7). Mô tả trực quan: cấu trúc phân tử hữu cơ, bình điện phân, pin Galvani, phản ứng este hóa, đồ thị chuẩn độ acid-base.
* **Không làm lộ đáp án:** Tuyệt đối không bao giờ ghi kết quả tính toán hay đánh dấu lộ đáp án trực tiếp trên hình vẽ đồ thị/sơ đồ.
* **Cơ chế lấp đầy không gian còn trống (Dynamic Space-Filling):**
  * Khung .graph-box mở rộng trọn vẹn 100% chiều rộng cột (width: 100%).
  * Khung .graph-container sử dụng flex: 1 và giới hạn tối đa lên tới 52vh (max-height: 52vh).
  * Hình vẽ tự động tính toán kích thước dựa trên khoảng trống còn lại bên dưới đề bài, mở lớn tối đa mà vẫn giữ nguyên tỷ lệ chuẩn mực (object-fit: contain).

---

## 7. NGUYÊN TẮC TƯƠNG TÁC ĐA GIÁC QUAN (AUDIO & GAMIFICATION)

### 7.1. Âm thanh Web Audio API tổng hợp độc lập 100% (Offline Sound Synth)
Toàn bộ âm thanh được tổng hợp thời gian thực bằng Web Audio API với hiệu ứng ngân vang phong phú:
* **Âm thanh Click nút (playClick()):** Tiếng pop bong bóng giòn tan, thanh thoát (0,05 giây, 600 Hz -> 900 Hz).
* **Âm thanh Đúng (playCorrect()):** Kéo dài 1,4 giây với chuỗi rải hợp âm ngũ cung tươi sáng Arpeggio 5 nốt (E5 -> G5 -> B5 -> E6 -> G6) kết hợp chuông ngân lấp lánh (Sparkling Shimmer).
* **Âm thanh Sai (playWrong()):** Kéo dài 0,9 giây với giai điệu trượt 3 nốt nhẹ nhàng (G3 -> E3 -> C3).
* **Âm thanh Khải Hoàn (playWin()):** Kéo dài 2,8 giây với khúc ca khải hoàn Triumphant Fanfare mô phỏng kèn đồng Synth đa âm ngân vang rực rỡ khi học sinh đạt điểm tuyệt đối.

### 7.2. Hiệu ứng hạt rơi rực rỡ (Canvas Confetti)
Mỗi khi học sinh hoàn thành đúng câu hỏi hoặc nộp bài thi thử đạt điểm số cao, kích hoạt hiệu ứng pháo hoa màu rơi trên màn hình bằng <canvas> thuần.

---

## 8. NGUYÊN TẮC QUẢN TRỊ TIẾN ĐỘ & TỔ CHỨC TỆP ĐỘC LẬP

### 8.1. Bảng Học Bạ Tiến Độ 30 Bài Học (LocalStorage Dashboard)
* Tự động lưu điểm số cao nhất của từng bài học vào bộ nhớ trình duyệt localStorage (HOA12_LESSON_SCORE_1 -> HOA12_LESSON_SCORE_30).
* Phân nhóm trực quan theo 8 Chương của SGK Kết nối tri thức:
  * **Chương I: Ester – Lipid** (Bài 1 -> Bài 3)
  * **Chương II: Carbohydrate** (Bài 4 -> Bài 7)
  * **Chương III: Hợp chất chứa nitrogen** (Bài 8 -> Bài 11)
  * **Chương IV: Polymer** (Bài 12 -> Bài 14)
  * **Chương V: Pin điện và điện phân** (Bài 15 -> Bài 17)
  * **Chương VI: Đại cương về kim loại** (Bài 18 -> Bài 23)
  * **Chương VII: Nguyên tố nhóm IA và nhóm IIA** (Bài 24 -> Bài 26)
  * **Chương VIII: Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất** (Bài 27 -> Bài 30)
* Thống kê số bài đã làm, Điểm trung bình và Tổng điểm tích lũy; cho phép nhấp chuyển nhanh bài học hoặc xóa lịch sử điểm để ôn tập lại từ đầu.

### 8.2. Cấu trúc đóng gói hoàn chỉnh (Standalone & Inlined Hub)
* **Cổng Tổng Hợp Master Hub (`He_Thong_Trac_Nghiem_Hoa_Hoc_12.html`):** 1 tệp HTML duy nhất tích hợp trọn vẹn toàn bộ 300 câu hỏi của 30 bài học, bảng học bạ 8 Chương, bộ chọn bài, bộ đếm giờ và bộ tạo âm thanh. Dùng 100% offline trên mọi thiết bị (máy tính, iPad, điện thoại).
* **Bộ 30 tệp độc lập (`Bai_01_...html` -> `Bai_30_...html`):** Mỗi bài học có thể hoạt động riêng lẻ như một ứng dụng độc lập, thuận tiện cho giáo viên gửi từng bài sau mỗi tiết dạy trên lớp.

---

## 9. QUY TRÌNH & CÔNG NGHỆ TẠO WEB HỆ THỐNG TRẮC NGHIỆM - ĐẤU TRƯỜNG HOÁ HỌC (FULL WEB ARCHITECTURE & DEPLOYMENT LIFECYCLE)

### 9.1. Kiến Trúc Dữ Liệu Nguồn Tập Trung (Data Layer - Single Source of Truth)
- **Tệp dữ liệu gốc bài học (`lessons_data.json` & `lessons_data.js`):**
  - Lưu trữ toàn bộ câu hỏi trắc nghiệm của 30 bài học Hoá Học 12 (300 câu hỏi chuẩn SGK).
  - Cấu trúc mỗi bài học chuẩn gồm 10 câu: 6 câu trắc nghiệm nhiều lựa chọn (MCQ), 2 câu Đúng/Sai (TF chùm 4 ý độc lập), 1 câu Ghép nối tương ứng (Match Pair) và 1 câu Điền khuyết từ khóa (Tap to Drop / Word Bank).
  - **Chuẩn hóa Unicode HTML thuần (Zero Raw LaTeX):** Tuyệt đối không dùng mã LaTeX thô (`$...$`, `\frac`, `\rightarrow`, `\rightleftharpoons`, `\text`). Sử dụng ký hiệu Unicode trực tiếp (`→, ⇌, ↑, ↓, ², ³, ⁻¹`) và thẻ HTML (`<sup>`, `<sub>`, `<span class="fraction"><span class="numerator">...</span><span class="denominator">...</span></span>`).
  - **Đồ họa SVG Dark Neon nội suy (Inline SVG):** Hình vẽ kỹ thuật, cấu trúc este hóa, bình điện phân, pin điện hóa, chuỗi carbohydrate được nhúng trực tiếp bằng các thẻ vector `<svg>`, `<path>`, `<circle>`, `<line>`, đảm bảo phóng to thu nhỏ không vỡ hạt và hiển thị 100% khi không có mạng.
- **Tệp dữ liệu Đấu Trường (`arena_questions_data.js`):**
  - Chuẩn hóa toàn bộ câu hỏi phản hồi nhanh 4 phương án cho 30 bài học Hoá Học 12 (và mở rộng toàn diện 3 khối THPT).
  - Tối ưu cho cơ chế bấm chuông thi đấu tốc độ cao trên điện thoại di động.

### 9.2. Động Cơ Biên Dịch & Đóng Gói Tự Động (Monolithic Inlining & Build Engine)
- **Kịch bản biên dịch Node.js (`generate_suite.js`):**
  - Chạy lệnh: `node generate_suite.js`
  - Động cơ tự động đọc dữ liệu nguồn (`lessons_data.json`, `lessons_info.json`), kết hợp với các mô-đun mã nguồn mẫu (HTML5, Base CSS Dark Glassmorphism, Web Audio Synthesizer, Keyboard Navigation, Quiz Engine, Canvas Confetti) để xuất bản tự động:
    1. **Cổng Tổng Hợp Master Hub (`index.html` & `He_Thong_Trac_Nghiem_Hoa_Hoc_12.html`):** Tích hợp trọn vẹn toàn bộ 30 bài học trong một ứng dụng duy nhất; tích hợp thanh Header 1 hàng chống rớt dòng, nút `[📲 Cài App]`, nút `[⚔️ Đấu Trường]`, Bảng Học Bạ LocalStorage phân nhóm 8 chương, bộ chuyển bài thông minh và 2 chế độ (Luyện tập giải thích chi tiết & Thi thử bấm giờ 15 phút có Bảng Rà Soát).
    2. **Bộ tệp bài học độc lập (`Bai_01_Ester_Lipid.html` đến `Bai_30_On_Tap_Chuong_8.html`):** Mỗi bài là một file HTML duy nhất (Monolithic Inlined SPA), nhúng sẵn toàn bộ CSS, JS, âm thanh và dữ liệu. Giáo viên có thể gửi trực tiếp từng file qua Zalo, Teams hoặc lưu vào USB để học sinh làm bài không cần cài đặt.
- **Quy chuẩn Font Stack & Tránh lỗi font tiếng Việt trên Windows:**
  - Font Stack chuẩn mực: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`.
  - Khai báo kế thừa bắt buộc cho form controls: `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }`.
  - Tuyệt đối không đưa `'SF Pro Display'` lên đầu để tránh lỗi hiển thị font serif gãy khúc trên hệ điều hành Windows.

### 9.3. Kiến Trúc Ngoại Tuyến Đột Phá (Offline-First Architecture & PWA)
- **Triết lý Zero External Dependencies (Không phụ thuộc mạng):**
  - 100% không dùng thư viện ngoài qua CDN (Không jQuery, không Bootstrap, không FontAwesome, không KaTeX/MathJax).
  - Không tải file âm thanh ngoài (`.mp3`, `.wav`) tránh lỗi nghẽn băng thông, lỗi 404 hoặc bị chặn chính sách Autoplay của trình duyệt.
- **Bộ tổng hợp âm thanh Web Audio API thời gian thực:**
  - `playClick()`: Hiệu ứng pop bong bóng thanh thoát (0,05s).
  - `playCorrect()`: Hợp âm ngũ cung rải Arpeggio 5 nốt + chuông ngân Shimmer (1,4s).
  - `playWrong()`: Giai điệu trượt 3 nốt nhẹ nhàng động viên (0,9s).
  - `playWin()`: Khúc ca khải hoàn Triumphant Fanfare đa âm (2,8s).
  - `soundExtremeBuzzer()`: Âm chuông bấm 3 tầng gameshow (Sub-punch + Laser zap + Metallic gong bell).
  - `playOpeningAnthem()`: Khúc ca xuất trận 140 BPM nảy lửa (5,5s).
  - `playVictoryFanfare5s()`: Khúc ca khải hoàn chiến thắng đấu trường (5,2s).
- **Cấu hình Ứng Dụng Web Tiến Bộ (Progressive Web App - PWA):**
  - **`manifest.json` & `manifest.webmanifest`:** Định nghĩa `display: "standalone"`, `orientation: "any"`, `background_color: "#070a14"`, `theme_color: "#070a14"`, icons độ phân giải cao 192x192 và 512x512 maskable.
  - **`sw.js` (Service Worker):** Thiết lập chiến lược lưu bộ nhớ đệm `Cache-First` (Cache falling back to Network) và `Network-First` cho trang HTML. Tự động lưu toàn bộ 30 bài học, Master Hub, Đấu Trường, Buzzer, Icon và Font vào Cache Storage ngay trong lần truy cập đầu tiên.
  - **Khả năng cài đặt 1 chạm (Add to Home Screen):** Nút `[📲 Cài App]` hiển thị trực tiếp trên thanh Header xử lý sự kiện `beforeinstallprompt`, cho phép học sinh và giáo viên cài đặt ra màn hình chính điện thoại hoặc máy tính, khởi chạy toàn màn hình không có thanh địa chỉ, dùng trọn đời không cần Internet.

### 9.4. Kiến Trúc Đấu Trường Hoá Học Liên Nhóm (Wireless QR Buzzer Arena Architecture)
- **Cấu trúc trang Đấu Trường (`Dau_Truong_Hoa_Hoc_Lien_Nhom.html`):**
  - **Sảnh Chờ `#setupView`:** Bố cục 2 cột trực quan. Cột trái chọn Khối (10, 11, 12, Toàn diện 3 khối), Bài học, Số lượng câu hỏi; Cột phải tạo mã QR và hiển thị trạng thái kết nối 4 tổ theo thời gian thực (Zero Idle Time).
  - **Cơ chế tự động thích ứng số câu hỏi (Dynamic Question Adaptation):**
    - Khi chọn 1 Bài học cụ thể: Bắt buộc chỉ hiển thị 2 mức `[ 5 Câu ]` và `[ 10 Câu ]`, ẩn hoàn toàn mức 15, 20 câu để triệt tiêu lỗi chọn nhầm vượt quá số câu của bài.
    - Khi chọn Toàn khối hoặc Toàn diện 3 khối: Mở rộng 5 mức linh hoạt `[ 5 Câu ]`, `[ 10 Câu ]`, `[ 15 Câu ]`, `[ 20 Câu ]`, `[ 30 Câu ]`.
  - **Hạ tầng truyền thông không dây kép (Dual-Channel Realtime Engine):**
    - **Kênh WebSockets MQTT thời gian thực:** Kết nối qua broker MQTT công cộng (`wss://broker.emqx.io:8084/mqtt`), mã phòng 4 số ngẫu nhiên (HOAxxxx), độ trễ tín hiệu dưới 50ms giữa điện thoại học sinh và màn hình máy chiếu của giáo viên.
    - **Kênh nội bộ dự phòng (Local Fallback):** Hỗ trợ `BroadcastChannel` trên trình duyệt khi chạy trên cùng một máy hoặc kiểm thử nội bộ.
  - **Giao diện chuông bấm di động độc lập (`buzzer.html`):**
    - Nút bấm cảm ứng diện tích lớn hình tròn công thái học, hỗ trợ rung phản hồi cảm ứng qua `navigator.vibrate()`.
    - Cơ chế khóa chuông nano-giây (First-to-Buzz Lockout): Ngay khi một đội bấm thành công, hệ thống lập tức phát âm chuông cực đại `soundExtremeBuzzer()`, đổi màu đèn tổ trên màn hình chính và khóa chuông của các đội còn lại.

### 9.5. Quy Trình Kiểm Thử Trực Quan & Nghiệm Thu (Mandatory QA Pipeline)
Mỗi chu kỳ phát triển, thêm câu hỏi hoặc nâng cấp tính năng bắt buộc thực hiện nghiêm ngặt theo 4 bước:
1. **Đồng bộ dữ liệu nguồn:** Cập nhật nội dung câu hỏi trong `lessons_data.json`, `lessons_data.js` và `arena_questions_data.js`.
2. **Biên dịch hệ thống:** Chạy lệnh `node generate_suite.js` để tái tạo Cổng Tổng Hợp Master Hub (`index.html`, `He_Thong_Trac_Nghiem_Hoa_Hoc_12.html`) và 30 file bài học lẻ.
3. **Kiểm chứng bằng hình ảnh thực tế (BẮT BUỘC 100% theo Quy tắc 1):**
   - Sử dụng Chrome Headless chụp ảnh màn hình giao diện thực tế tại các độ phân giải PC (1280x800) và Mobile (390x844).
   - Gọi công cụ `view_file` xem trực quan ảnh chụp để kiểm tra: Không lỗi font tiếng Việt, không che khuất đồ thị SVG, nút bấm Title Case chuẩn mực, phân số và công thức hoá học đồng màu.
4. **Cập nhật tài liệu tổng kết `walkthrough.md`.**

---

## 10. KÊNH PHÁT HÀNH, TRUYỀN THÔNG & QUẢNG BÁ SẢN PHẨM (COMMUNITY & SOCIAL OUTREACH)
* **Fanpage Facebook chính thức:** [T-Apps - Phần mềm hỗ trợ giáo viên](https://www.facebook.com/profile.php?id=61593943503646)
* **Tác giả phát triển & định hướng chuyên môn:** Thầy Trần Mạnh Tùng.
* **Quy chuẩn bài viết giới thiệu & kéo tương tác:** Áp dụng công thức 5 bước chuẩn mực (Tiêu đề quà tặng nổi bật -> Liệt kê tính năng cốt lõi -> Thả tim lan tỏa -> Kêu gọi bình luận để nhận tài liệu -> Bộ Hashtag `#TApps #PhanMemHoTroGiaoVien #HoaHoc12 #TracNghiemTuongTac #ChiaSeMienPhi`).

---

## 11. BỘ QUY CHUẨN ĐẤU TRƯỜNG HÓA HỌC LIÊN NHÓM (WIRELESS QR BUZZER ARENA)

### 11.1. Sảnh Thiết Lập Trận Đấu Trước Khi Vào Đấu Trường (`#setupView`)
- **Màn hình sảnh chờ mặc định:** Khi vào Đấu Trường, giao diện đầu tiên luôn là `#setupView`.
- **Bố cục 2 cột cân xứng:**
  - **Cột trái (Thiết lập trận đấu):** Chọn Khối lớp (10, 11, 12, Toàn diện 3 khối), Chọn Bài học (phân nhóm theo từng chương) hoặc Toàn bộ bài học của khối, và Chọn Số lượng câu hỏi thi đấu.
  - **Cột phải (Kết nối QR thời gian thực - Zero Idle Time):** Hiển thị trực tiếp Mã phòng & Mã QR để học sinh các tổ quét kết nối điện thoại ngay trong khi giáo viên đang chọn bài; 4 đèn trạng thái báo `🟢 Đã kết nối` theo thời gian thực.
- **Nút "🚀 Bắt Đầu Đấu Trường Ngay ➔":** Sử dụng Title Case với `font-family: var(--font-family) !important; font-weight: 800;`, hiệu ứng phát quang xung nhịp, kích hoạt Khúc ca xuất trận 5,5s khi bắt đầu.
- **Nút "⚙️ Đổi Bài Học":** Luôn hiện diện trên thanh Header của màn hình thi đấu, cho phép giáo viên chuyển bài học bất kỳ lúc nào.

### 11.2. Cơ Chế Tự Động Thích Ứng Số Lượng Câu Hỏi Theo Bài Học (Dynamic Question Adaptation)
- **Khi chọn 1 Bài học cụ thể:** Giao diện BẮT BUỘC tự động co lại chỉ hiển thị 2 mức:
  - `[ 5 Câu (Nhanh ⚡) ]`
  - `[ 10 Câu (Toàn Bộ Bài Học 🎯) ]` *(Tự động kích hoạt mặc định)*
  - Tuyệt đối ẩn/chặn các mức 15 câu, 20 câu để triệt tiêu lỗi chọn vượt quá.
- **Khi chọn "Toàn bộ bài học của khối" hoặc "Toàn Diện 3 Khối":** Mở rộng linh hoạt 5 mức: `[ 5 Câu ]` • `[ 10 Câu (Chuẩn) ]` • `[ 15 Câu ]` • `[ 20 Câu ]` • `[ 30 Câu (Đại Chiến) ]`.
- **Cơ chế chốt chặn an toàn (Safety Clamping):** `const finalCount = Math.min(count, battleQuestions.length);`.

### 11.3. Kho Dữ Liệu Câu Hỏi Phản Hồi Nhanh
- Tích hợp kho câu hỏi trắc nghiệm phản hồi nhanh chuẩn hóa, bảo đảm mỗi bài học có đúng 10 câu hỏi phong phú phục vụ bấm chuông thi đấu.

### 11.4. Động Cơ Âm Thanh Web Audio Đa Tầng Kích Thích (>= 5 Giây)
- **Khúc Ca Xuất Trận (`playOpeningAnthem()`):** 5,5 giây, nhịp 140 BPM, dàn kèn đồng Synth đa âm + Bassline 12 nhịp nảy lửa, cao trào hợp âm khải hoàn.
- **Khúc Ca Khải Hoàn Chiến Thắng (`playVictoryFanfare5s()`):** 5,2 giây, Arpeggio C5 -> G6 + kèn đồng Triumphant Brass và pháo hoa Confetti.
- **Âm Thanh Chuông Bấm Gameshow 3 Tầng (`soundExtremeBuzzer()`):** Sub-punch (Kick transient 220Hz ➔ 45Hz) + Laser zap sweep (900Hz ➔ 1750Hz ➔ 750Hz) + Metallic gong bell (3 bội âm 880Hz, 1320Hz, 1760Hz).
- **Phím tắt máy tính cho giáo viên:** `Space` (Tiếp tục/Tạm dừng), `Enter` (Hiện đáp án), `B` (Mở chuông), `1`, `2`, `3`, `4` (Kích hoạt chuông thủ công cho từng tổ).

### 11.5. Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng Môn Hóa Học (Multi-Format Wireless Student Buzzer Engine)

#### 11.5.1. Bốn Định Dạng Bàn Bấm Chuông Thời Gian Thực
Bàn bấm chuông di động (`buzzer.html`) của Đấu Trường Hóa Học tích hợp 4 bàn điều khiển chuyên biệt theo đúng 4 định dạng câu hỏi đánh giá năng lực của Bộ GD&ĐT 2025:
1. **Bàn Trắc Nghiệm 4 Phương Án (`#pad_mcq`):**
   - 4 nút cảm ứng khổng lồ A, B, C, D xếp lưới 2x2 viền neon tương phản cao.
   - Thao tác 1 chạm (One-Touch Instant Submit): Chạm là gửi ngay lập tức lên màn hình máy chiếu, ghi nhận thời gian phản hồi chính xác đến mili-giây.
2. **Bàn Đúng / Sai Chùm 4 Mệnh Đề Hóa Học (`#pad_tf`):**
   - 4 hàng tương ứng với 4 nhận định độc lập `a)`, `b)`, `c)`, `d)` về thí nghiệm, hiện tượng hoặc tính chất hóa học.
   - Mỗi hàng gồm 2 nút gạt công thái học: `[ 🟢 Đ ]` (Đúng) và `[ 🔴 S ]` (Sai), đổi màu neon rực rỡ khi được chọn.
   - Nút nộp bài tổng hợp hiển thị bản xem trước kết quả thời gian thực: `🚀 GỬI ĐÁP ÁN (Đ - S - Đ - Đ)` hoặc `(Chưa chọn đủ 4 ý)`.
3. **Bàn Ghép Nối Tương Ứng Bản Chất Hóa Học (`#pad_match`):**
   - 4 hàng mục Cột A (`1.`, `2.`, `3.`, `4.` - Ví dụ: Tên chất / Ứng dụng thực tiễn / Thí nghiệm), mỗi hàng gắn kèm cụm nút chọn nhanh Cột B (`A`, `B`, `C`, `D` - Phương trình / Nhóm chức / Bản chất phản ứng).
   - Giao diện dạng viên thuốc (Pill buttons), tự động làm nổi bật cặp ghép đã chọn.
   - Nút nộp bài tổng hợp: `🚀 GỬI GHÉP NỐI (1-B, 2-A, 3-D, 4-C)`.
4. **Bàn Điền Khuyết / Trả Lời Ngắn Chế Độ Kép (`#pad_fill`):**
   - Tích hợp 2 chế độ tương tác linh hoạt: **Gõ Chữ / Từ Khóa Hóa Học** và **Bàn Phím Số Nhanh**.
   - Thanh chuyển đổi 1 chạm (`#fillModeSwitch`): `[ ✍️ Gõ Chữ & Từ Khóa ]` ↔ `[ 🔢 Bàn Phím Số Nhanh ]`.

#### 11.5.2. Chế Độ Kép Cho Câu Hỏi Điền Khuyết Hóa Học (Fill-in Dual Mode)
- **Chế độ 1: ✍️ Gõ Chữ & Ngân Hàng Từ Khóa Hóa Học (Text & Word Bank Mode):**
  - Dành cho các câu hỏi điền từ khóa, danh pháp IUPAC, hiện tượng thí nghiệm, loại phản ứng hoặc chất tham gia.
  - Ô nhập văn bản lớn `#fillInputText` kích hoạt bàn phím ảo tiếng Việt của điện thoại di động, hỗ trợ gõ nhanh phím `Enter` trên bàn phím để gửi bài tức thì.
  - **Ngân Hàng Từ Khóa Chạm Nhanh (Word Bank Chips):** Lưới các từ khóa phổ biến trong Hóa học được thiết kế dạng nút bấm nhỏ gọn viền neon. Học sinh chỉ cần chạm 1 lần là từ khóa tự động nhảy vào ô nhập và sẵn sàng bấm gửi.
  - **Ngân Hàng Từ Khóa Động Theo Câu Hỏi (Dynamic Word Bank):** Khi Host phát câu hỏi có kèm mảng từ gợi ý `words: [...]`, giao diện chuông học sinh sẽ ưu tiên nạp chính xác các từ này lên đầu thanh từ khóa gợi ý.
- **Chế độ 2: 🔢 Bàn Phím Số Nhanh (15-Key Touch Numpad Mode):**
  - Dành cho các câu hỏi tính toán số học: số mol, khối lượng (g), thể tích khí (L), nồng độ (M), giá trị pH, hằng số cân bằng Kc, biến thiên enthalpy ΔrH, số electron trao đổi...
  - Màn hình hiển thị số `#fillDisplay` cỡ chữ lớn (1.85rem), căn giữa, màu neon vàng hổ phách `#fde047`.
  - Bàn phím số 15 phím vật lý công thái học:
    - Hàng 1: `[ 1 ]`, `[ 2 ]`, `[ 3 ]`
    - Hàng 2: `[ 4 ]`, `[ 5 ]`, `[ 6 ]`
    - Hàng 3: `[ 7 ]`, `[ 8 ]`, `[ 9 ]`
    - Hàng 4: `[ ± ]` (Đổi dấu âm/dương cho nhiệt phản ứng ΔH hoặc điện tích), `[ 0 ]`, `[ . ]` (Dấu thập phân)
    - Hàng 5: `[ C ]` (Xóa hết), `[ ⌫ ]` (Xóa lùi 1 ký tự), `[ 🚀 GỬI ]` (Gửi kết quả số).

#### 11.5.3. Ngân Hàng Từ Khóa Chuyên Sâu Môn Hóa Học (Chemistry Word Bank)
Hệ thống chuông bấm định nghĩa sẵn ngân hàng từ khóa chuẩn mực bao phủ toàn diện chương trình Hóa học THPT:
- *Nhiệt động hóa học & Cân bằng:* `tỏa nhiệt`, `thu nhiệt`, `tăng`, `giảm`, `không đổi`, `chuyển dịch thuận`, `chuyển dịch nghịch`, `cân bằng hóa học`, `hằng số cân bằng`.
- *Hiện tượng & Dấu hiệu thí nghiệm:* `kết tủa`, `khí thoát ra`, `kết tủa trắng`, `kết tủa đỏ gạch`, `sủi bọt khí`, `mất màu`, `đổi màu xanh`, `cháy sáng`, `vẩn đục`, `tách lớp`.
- *Loại phản ứng & Tính chất:* `axit`, `bazơ`, `oxi hóa`, `khử`, `thủy phân`, `este hóa`, `trùng hợp`, `xà phòng hóa`, `tráng bạc`, `thay thế`, `cộng hợp`.
- *Hợp chất & Nhóm chức:* `este`, `ancol`, `ankan`, `anken`, `ankin`, `amin`, `amino axit`, `peptit`, `protein`, `glucozơ`, `fructozơ`, `saccarozơ`, `tinh bột`, `xenlulozơ`, `axit cacboxylic`, `anđehit`.
- *Cấu tạo phân tử & Liên kết:* `liên kết ion`, `liên kết cộng hóa trị`, `liên kết hiđro`, `kim loại`, `phi kim`, `phức chất`, `nguyên tử`, `phân tử`.

#### 11.5.4. Động Cơ Chấm Điểm Đa Định Dạng & Chuẩn Hiển Thị Olympia Live Bar
- **Bảng Trực Tiếp Olympia Tại Màn Hình Host (Olympia Live Bar):**
  - Khi học sinh gửi đáp án, Host cập nhật ngay thanh trạng thái gồm: Avatar đội, Tên tổ, Icon định dạng (`⚡` MCQ, `⚖️` Đúng/Sai, `🔗` Ghép đôi, `✍️` Điền chữ, `🔢` Điền số), Nội dung câu trả lời và Thời gian phản hồi tính bằng giây.
- **Động Cơ So Khớp & Chấm Điểm Thông Minh (Smart Multi-Format Grading Engine):**
  - *Trắc nghiệm MCQ:* So khớp mã phương án chính xác (`A`, `B`, `C`, `D`).
  - *Đúng / Sai:* So khớp chuỗi tổ hợp hoặc mảng boolean (`Đ-S-Đ-Đ` hoặc `[true, false, true, true]`).
  - *Ghép nối:* So khớp cấu trúc cặp ghép dạng object `{1: "B", 2: "A", 3: "D", 4: "C"}`.
  - *Điền khuyết chuỗi văn bản:*
    - Chuẩn hóa chuỗi bằng cách loại bỏ khoảng trắng thừa và chuyển về chữ thường (`answer.trim().toLowerCase()`).
    - Hỗ trợ mảng đáp án đồng nghĩa: `acceptableAnswers: ["tỏa nhiệt", "toả nhiệt", "phản ứng tỏa nhiệt"]`.
  - *Điền khuyết giá trị số:* So khớp giá trị số thực với ngưỡng sai số cho phép: `Math.abs(parseFloat(studentAns) - parseFloat(correctAns)) < 0.01`.
- **Quy Chuẩn Chống Tràn Giao Diện Di Động (Zero-Clipping Guard):**
  - Thẻ bao ngoài bàn bấm `#buzzerView` luôn khai báo `max-width: 440px; padding: 8px; box-sizing: border-box; margin: 0 auto;`.
  - Thanh chuyển đổi tab 4 định dạng `.student-format-tabs` sử dụng CSS Grid 4 cột đều nhau: `display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; box-sizing: border-box;`.
  - Bảo đảm trên mọi kích cỡ màn hình di động (từ 360px đến 480px), giao diện không bao giờ bị cắt viền, tràn ngang hay che lấp các nút bấm quan trọng.

---

## 12. BỘ ĐẶC TẢ YÊU CẦU ĐỂ TẠO TRANG WEB HÓA HỌC TƯƠNG TỰ (SPECIFICATION BLUEPRINT & PROMPT TEMPLATE)

### 12.1. Mục Tiêu & Phạm Vi Áp Dụng
Bộ đặc tả này là **chuẩn mực kỹ thuật và sư phạm cao nhất**, được đóng gói dưới dạng Blueprint để người dùng hoặc AI có thể tái tạo ngay lập tức một hệ thống web trắc nghiệm tương tác và đấu trường bấm chuông tương tự cho môn **Hóa học** (Khối 10, Khối 11, Khối 12) theo chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống).

### 12.2. Danh Mục 10 Yêu Cầu Kỹ Thuật Cốt Lõi Bắt Buộc
1. **Kiến trúc Ngoại Tuyến 100% (Zero External Dependencies):** 100% không dùng CDN bên ngoài, không dùng file âm thanh rời, hoạt động trọn đời không cần Internet.
2. **Đóng Gói Độc Lập (Monolithic Inlined HTML):** Mỗi bài học xuất bản thành 1 file `.html` duy nhất (Single-File SPA), chứa trọn vẹn HTML5, CSS, JS, Audio Synthesizer và dữ liệu câu hỏi Hóa học. Master Hub (`index.html`) tích hợp toàn bộ các bài học trong một ứng dụng duy nhất.
3. **Tiêu Chuẩn Ứng Dụng Web Tiến Bộ (PWA):** `manifest.json` và `sw.js` theo cơ chế `Cache-First`, cài đặt 1 chạm (Add to Home Screen) lên điện thoại/máy tính.
4. **Chuẩn Hóa Font Stack Tránh Lỗi Font Windows:** `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`. Khai báo bắt buộc kế thừa phông chữ: `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }`.
5. **Giao Diện Trọng Tâm & Không Cần Cuộn Chuột (Zero Wasted Space & No-Scroll):** Card làm bài Dark Glassmorphism khống chế `max-height: calc(100vh - 84px)`, căn giữa hoàn hảo trên PC/Laptop/Tablet ngang; tự động chuyển 1 cột mượt mà trên mobile dọc.
6. **Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header):** [Tên Giáo Viên ✏️] + [Menu chọn bài] + [Bộ đổi font A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer đếm ngược] + [Mini-map 1..10].
7. **Động Cơ Âm Thanh Web Audio API Tự Sinh Đa Tầng:** Tự tổng hợp bằng mã nguồn: Click bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông shimmer (1,4s), Sai trượt nốt nhẹ nhàng (0,9s), Khải hoàn fanfare (2,8s), Chuông bấm Gameshow 3 tầng Sub-punch + Laser zap + Metallic gong bell, Khúc ca xuất trận 140 BPM (5,5s), Khúc ca chiến thắng (5,2s).
8. **Đấu Trường Bấm Chuông Không Dây (Wireless QR Buzzer Arena):** Sảnh Chờ `#setupView` 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time); kết nối WebSockets MQTT thời gian thực (< 50ms) + Kênh nội bộ `BroadcastChannel`. Cơ chế tự thích ứng số câu hỏi: 1 bài lẻ chỉ chọn 5 hoặc 10 câu; toàn khối mở 5, 10, 15, 20, 30 câu.
9. **Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng (Multi-Format Buzzer Engine):**
   - Hỗ trợ đầy đủ 4 định dạng thi đấu tương ứng 4 loại câu hỏi: Trắc nghiệm A-B-C-D 1 chạm, Đúng/Sai 4 nhận định độc lập, Ghép đôi Cột A với Cột B, và Điền khuyết chế độ kép.
   - Chế độ kép cho câu hỏi điền khuyết Hóa học: Tích hợp linh hoạt giữa chế độ **✍️ Gõ Chữ & Ngân Hàng Từ Khóa Hóa Học Chạm Nhanh** (cho hiện tượng, danh pháp, loại chất, phản ứng) và **🔢 Bàn Phím Số Nhanh 15 Phím** (cho tính toán số mol, khối lượng, pH, nhiệt phản ứng).
   - Động cơ chấm điểm thông minh: Chuẩn hóa chuỗi ký tự không phân biệt hoa thường/dấu cách, hỗ trợ mảng từ đồng nghĩa và kiểm tra số thực trong ngưỡng sai số cho phép.
   - Chuẩn chống tràn tuyệt đối (Zero-Clipping Guard): Khống chế `max-width: 440px`, padding 8px, CSS Grid 4 cột hiển thị hoàn hảo trên 100% điện thoại di động.
10. **Hệ Thống Điều Hướng Bàn Phím Chuẩn Mực (Keyboard Navigation):** Mũi tên Trái/Phải đổi câu, Lên/Xuống đổi bài, an toàn chốt chặn, cách ly form controls và modal.

### 12.3. Danh Mục Yêu Cầu Sư Phạm Chuẩn Hóa Học GD&ĐT 2025
1. **Cấu Trúc 4 Định Dạng Câu Hỏi Đánh Giá Năng Lực (10 câu/bài):**
   - 6 câu MCQ (Đảo ngẫu nhiên 4 phương án bằng thuật toán Fisher-Yates mỗi lần làm bài).
   - 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d), tính điểm bậc thang: 1 ý = 0,1đ; 2 ý = 0,25đ; 3 ý = 0,5đ; 4 ý = 1,0đ.
   - 1 câu Ghép nối tương ứng (Match Pair) tiền tố 1, 2... ghép với A, B...
   - 1 câu Điền khuyết khép kín (Tap to Drop / Word Bank) với cả dạng điền từ khóa khoa học (hiện tượng, danh pháp) và dạng điền giá trị số (tính toán hóa học).
2. **Quy Chuẩn Hiển Thị Công Thức Hóa Học Thuần Unicode HTML (Zero Raw LaTeX):**
   - 100% không dùng mã `$...$`. Dùng trực tiếp thẻ HTML: chỉ số nguyên tử `<sub>` (ví dụ: `C<sub>2</sub>H<sub>5</sub>OH`, `H<sub>2</sub>SO<sub>4</sub>`), điện tích ion `<sup>` (ví dụ: `Fe<sup>3+</sup>`, `SO<sub>4</sub><sup>2-</sup>`), mũi tên phản ứng (`→, ⇌, ↑, ↓`).
   - Phân số đồng màu tuyệt đối với văn bản xung quanh (`color: inherit; border-bottom: 1.6px solid currentColor;`).
3. **Nguyên Tắc Lời Giải Chi Tiết Sư Phạm:**
   - In hoa, in đậm thẻ đáp án đúng ở đầu khung phản hồi.
   - Trình bày mạch lạc theo 3 bước tư duy: Hiện tượng / Bản chất hóa học $\rightarrow$ Phương trình phản ứng / Biến đổi đại số $\rightarrow$ Kết luận và đơn vị.
   - Tích hợp Bảng Rà Soát Chi Tiết 10 câu sau khi nộp bài thi thử.

---

### 12.4. Mẫu Prompt Chuẩn Một Chạm Môn Hóa Học (Master Chemistry Prompt Template)
*Giáo viên hoặc lập trình viên chỉ cần sao chép toàn bộ đoạn prompt dưới đây để tạo ngay một hệ thống web Hóa học:*

```text
Hãy đóng vai trò là Chuyên gia Lập trình Web Giáo dục & Chuyên gia Sư phạm Hóa học THPT. 
Hãy tạo một Hệ thống Web Trắc Nghiệm Tương Tác và Đấu Trường Liên Nhóm cho môn HÓA HỌC 12 (hoặc HÓA HỌC 10, HÓA HỌC 11) theo Chương trình GDPT 2018 (Bộ sách: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG), tuân thủ 100% các tiêu chuẩn kỹ thuật và sư phạm sau:

1. KIẾN TRÚC & OFFLINE-FIRST:
- 100% Không dùng thư viện ngoài qua CDN (Không jQuery, không Bootstrap, không KaTeX/MathJax, không font ngoài phụ thuộc mạng).
- Monolithic Inlining: Toàn bộ CSS, JS, Audio Synthesizer và dữ liệu câu hỏi được nhúng trực tiếp trong 1 tệp HTML duy nhất (gồm Cổng Master Hub và các file bài học lẻ).
- Tích hợp PWA (manifest.json + sw.js Cache-First) để học sinh cài đặt 1 chạm ra màn hình chính điện thoại và dùng trọn đời ngoại tuyến 100%.

2. GIAO DIỆN & TYPOGRAPHY:
- Thiết kế phong cách Dark Glassmorphism Neon (#070a14 nền tối, viền kính mờ phát quang).
- Bố cục Card trung tâm Zero Wasted Space: Trên PC/Laptop/iPad khống chế chiều cao trong màn hình, KHÔNG BỊ CUỘN TRANG; tự động co giãn 1 cột trên điện thoại xoay dọc.
- Thanh Header 1 hàng duy nhất không rớt dòng: [Tên Giáo Viên có thể sửa ✏️] + [Menu chọn bài] + [Bộ chỉnh cỡ chữ A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer] + [Minimap 1..10].
- Font Stack chuẩn mực chống lỗi font tiếng Việt trên Windows: 'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif. Khai báo bắt buộc: *, button, input, select, textarea { font-family: var(--font-family); }.

3. DỮ LIỆU & NGUYÊN TẮC SƯ PHẠM HÓA HỌC:
- Mỗi bài học gồm đúng 10 câu hỏi chuẩn 4 định dạng của Bộ GD&ĐT 2025:
  + 6 câu MCQ (Đảo ngẫu nhiên vị trí đáp án bằng Fisher-Yates mỗi lần làm bài).
  + 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0).
  + 1 câu Ghép nối tương ứng (Match Pair) giữa chất/hiện tượng với bản chất phản ứng.
  + 1 câu Điền khuyết từ khóa / giá trị số tính toán (Tap to Drop / Word Bank).
- Công thức hóa học thuần Unicode HTML 100% (Zero Raw LaTeX), chỉ số dưới <sub> (C₂H₅OH, H₂SO₄), ion <sup> (Fe³⁺, SO₄²⁻), mũi tên (→, ⇌, ↑, ↓). Phân số dùng color: inherit và border-bottom: 1.6px solid currentColor đồng màu với chữ.
- Lời giải hiện thẻ đáp án đúng trước, giải thích rõ ràng 3 bước tư duy khoa học.

4. ÂM THANH WEB AUDIO API THỜI GIAN THỰC:
- 100% tự tổng hợp bằng mã nguồn: Click bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông ngân, Sai trượt nốt nhẹ nhàng, Khải hoàn Fanfare chiến thắng, Chuông bấm Đấu Trường 3 tầng Gameshow (Sub-punch + Laser zap + Metallic gong bell), Khúc ca xuất trận 5,5s nhịp 140 BPM, Khúc ca khải hoàn 5,2s.

5. ĐẤU TRƯỜNG BẤM CHUÔNG KHÔNG DÂY ĐA ĐỊNH DẠNG MÔN HÓA (MULTI-FORMAT WIRELESS QR BUZZER ARENA):
- Màn hình Sảnh Chờ 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time).
- Bàn bấm chuông di động buzzer.html tích hợp đầy đủ 4 định dạng tương tác:
  + Bàn trắc nghiệm MCQ 4 nút lớn A, B, C, D (1 chạm nộp ngay).
  + Bàn Đúng/Sai 4 mệnh đề a, b, c, d với công tắc gạt [🟢 Đ] / [🔴 S] và nút nộp tổng hợp có xem trước kết quả thời gian thực.
  + Bàn ghép nối 4 hàng tương ứng Cột A ghép Cột B với giao diện viên thuốc (Pill buttons).
  + Bàn điền khuyết chế độ kép: Chuyển đổi 1 chạm giữa [✍️ Gõ Chữ & Ngân Hàng Từ Khóa] (hỗ trợ bàn phím ảo, phím Enter gửi bài, ngân hàng từ khóa chạm nhanh Hóa học và từ khóa động theo câu hỏi) và [🔢 Bàn Phím Số Nhanh] (15 phím vật lý: 0..9, ±, ., C, ⌫, 🚀 GỬI).
- Ngân hàng từ khóa Hóa học tích hợp sẵn: tỏa nhiệt, thu nhiệt, tăng, giảm, không đổi, chuyển dịch thuận, chuyển dịch nghịch, kết tủa, khí thoát ra, mất màu, axit, bazơ, oxi hóa, khử, este, ancol, ankan, anken, ankin, amin, amino axit, peptit, protein, glucozơ, fructozơ, liên kết ion, liên kết cộng hóa trị, liên kết hiđro...
- Bảng hiển thị trực tiếp Host (Olympia Live Bar): Hiện avatar, tổ, icon định dạng (⚡, ⚖️, 🔗, ✍️, 🔢), nội dung học sinh gửi và thời gian phản hồi mili-giây.
- Động cơ chấm điểm đa định dạng: Tự động so khớp chuỗi chuẩn hóa trim().toLowerCase(), mảng từ đồng nghĩa và so sánh số thực sai số cho phép < 0.01.
- Chuẩn chống tràn Zero-Clipping Guard: Khống chế max-width: 440px, padding: 8px, grid 4 cột, hiển thị trọn vẹn 100% trên mọi điện thoại di động (360px - 480px).
- Cơ chế tự thích ứng số câu hỏi: Khi chọn 1 bài lẻ, tự động chỉ hiện 5 câu và 10 câu; khi chọn toàn khối mở rộng 5, 10, 15, 20, 30 câu.
- Kết nối truyền thông kép: WebSockets MQTT thời gian thực (< 50ms) kết hợp kênh nội bộ BroadcastChannel.

6. ĐIỀU HƯỚNG BÀN PHÍM CHUẨN MỰC:
- Phím Mũi tên Trái / Phải: Lùi / Tiến câu hỏi (prevQuestion / nextQuestion) có chặn biên an toàn.
- Phím Mũi tên Lên / Xuống: Lùi / Tiến bài học (prevLesson / nextLesson), có hộp thoại xác nhận nếu học sinh đang làm bài thi thử dở dang để tránh mất kết quả thi.
- Tự động vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong input/textarea/select hoặc đang mở Modal đổi tên giáo viên; kích hoạt e.preventDefault() để chống cuộn trang ngoài ý muốn.
```
