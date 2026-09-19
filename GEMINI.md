# BỘ QUY TẮC THIẾT KẾ & CHUẨN MỰC HỆ THỐNG TRẮC NGHIỆM VẬT LÍ 12
*Biên soạn phục vụ giảng dạy môn Vật Lí THPT (Chương trình Giáo dục phổ thông 2018)*  
**Tác giả định hướng & chuẩn mực sư phạm:** Thầy Trần Mạnh Tùng  
**Bộ sách:** Vật Lí 12 – Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam)  
*(Bộ quy tắc chuẩn mực hợp nhất toàn diện duy nhất của hệ thống)*

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
2. **Trắc nghiệm Đúng / Sai (TF - Cụm 4 nhận định độc lập):** Yêu cầu học sinh phân tích 4 mệnh đề a), b), c), d) từ một ngữ cảnh khoa học, tình huống thực tế đời sống hoặc bảng số liệu/đồ thị đo đạc.
3. **Ghép nối tương ứng (Match Pair):** Ghép đôi giữa hiện tượng đời sống/ứng dụng kĩ thuật (cột A) với bản chất vật lí/định luật nhiệt động học/từ trường/hạt nhân tương ứng (cột B). Tiền tố đơn nhất (1., 2. cho Cột A; A., B. cho Cột B), không bao giờ lặp tiền tố 1. 1. hay A. A..
4. **Điền khuyết khép kín (Tap to Drop / Word Bank):** Học sinh chọn từ khóa chính xác trong ngân hàng từ để gắn vào các vị trí trống của định nghĩa, quy tắc hoặc định luật vật lí. Token hóa 2 bước độc lập %%%SLOT_i%%%, không lồng thẻ, không sót ký tự thô [blank].

### 2.2. Chuẩn hóa thang điểm phân hóa của Bộ GD&ĐT
Với câu hỏi Đúng/Sai dạng chùm 4 ý, áp dụng chuẩn thang điểm bậc thang:
* Đúng 1 ý: **+0,10 điểm**
* Đúng 2 ý: **+0,25 điểm**
* Đúng 3 ý: **+0,50 điểm**
* Đúng trọn vẹn cả 4 ý: **+1,00 điểm**

### 2.3. Nguyên tắc sư phạm trong phản hồi và phân tích kết quả
* **Hiện đáp án trước, giải thích sau:** Đầu khung phản hồi luôn in hoa, đậm thẻ đáp án đúng để học sinh đối chiếu ngay lập tức (Ví dụ: ĐÁP ÁN ĐÚNG: Đáp án B (420 s)).
* **Trình bày rõ 3 bước tư duy:** Lời giải trình bày chặt chẽ theo trình tự: Hiện tượng / Định luật gốc -> Biến đổi công thức đại số -> Thay số và chỉ rõ đơn vị.
* **Tích hợp Bảng Rà Soát Chi Tiết (Exam Review Table):** Sau khi hoàn thành chế độ thi thử, tự động hiển thị bảng đối chiếu 10 câu gồm: Trạng thái kết quả, Điểm đạt được, Lựa chọn của học sinh và Đáp án chuẩn của giáo viên.

---

## 3. QUY TẮC HIỂN THỊ CÔNG THỨC TOÁN - LÍ, VECTƠ, CĂN THỨC & PHÂN SỐ (MATH FORMULA & NOTATION ENGINE)

### 3.1. Chuẩn Hóa Vectơ Bằng Pure Inline SVG Co Giãn Toàn Phần (Stretchy SVG Vector Engine)
- **Tuyệt đối cấm sử dụng:**
  - **Cấm dùng ký tự kết hợp Unicode `\u20D7`** (ví dụ: `a\u20D7`, `b\u20D7`): Trên hệ điều hành Windows hoặc thiết bị thiếu font toán, ký tự này bị lỗi vỡ phông thành các ô vuông đen/trắng `▯` (Tofu box).
  - **Cấm dùng MathML `<mover><mi>...</mi><mo>→</mo></mover>` cho vectơ nhiều chữ cái:** MathML trong trình duyệt Chromium trên Windows không tự co giãn mũi tên nếu máy tính học sinh thiếu font OpenType MATH chuyên dụng (STIX Two Math). Hậu quả là mũi tên chỉ nằm cụt lủn trên ký tự đầu tiên (ví dụ: chỉ che chữ A trên $\vec{AC'}, \vec{AB}, \vec{AA'}$).
- **Chuẩn cấu trúc Pure Inline SVG co giãn 100% (`preserveAspectRatio="none"`):**
  - Mọi vectơ (từ đơn chữ cái $\vec{a}, \vec{b}, \vec{0}, \vec{u}, \vec{v}, \vec{n}$ đến nhiều chữ cái $\vec{AB}, \vec{AC}, \vec{AC'}, \vec{AA'}, \vec{A'B'}, \vec{A'D'}$) bắt buộc phải định dạng bằng thẻ Inline SVG chuẩn mực:
    ```html
    <span class="vec"><svg class="vec-arr" viewBox="0 0 100 20" preserveAspectRatio="none"><line x1="0" y1="10" x2="96" y2="10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M 82 2 L 98 10 L 82 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="vec-sym">AC'</span></span>
    ```
  - **Quy chuẩn CSS toàn cục:**
    ```css
    .vec {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      vertical-align: middle;
      position: relative;
      padding-top: 0.38em;
      margin: 0 0.12em;
      line-height: 1;
    }
    .vec-arr {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.42em;
      overflow: visible;
    }
    .vec-sym {
      font-style: italic;
      font-weight: 600;
      line-height: 1;
    }
    ```
  - **Ưu điểm vượt trội:**
    - Mũi tên tự động căng 100% bề rộng theo đúng kích thước bất kỳ của nhóm ký tự (`width: 100%`, `preserveAspectRatio="none"`).
    - Thân mũi tên thẳng, đầu nhọn thanh thoát, không biến dạng chiều cao (`height: 0.42em`).
    - Kế thừa màu sắc `stroke="currentColor"` linh hoạt theo mọi trạng thái: trắng trong câu hỏi, xanh ngọc `#a7f3d0` khi chọn đúng, đỏ `#fecaca` khi chọn sai, cyan `#38bdf8` trong khung lời giải.
    - 100% Offline, Zero External Fonts, triệt tiêu vĩnh viễn lỗi ô vuông `▯`.

### 3.2. Chuẩn Hóa Ký Hiệu Căn Thức Với Thanh Gạch Ngang Vinculum (`.sqrt`)
- **Tuyệt đối không dùng ký hiệu căn đơn điệu kết hợp ngoặc đơn:** Không viết `√(x² + 2x)` hay `√ (2)`.
- **Chuẩn cấu trúc HTML/CSS có thanh gạch ngang vinculum liền khối:**
  ```html
  <span class="sqrt"><span class="rad">√</span><span class="radicand">ax² + bx + c</span></span>
  ```
- **Quy chuẩn CSS:**
  ```css
  .sqrt {
    display: inline-flex;
    align-items: flex-end;
    vertical-align: middle;
    margin: 0 0.15em;
    line-height: 1;
  }
  .rad {
    font-size: 1.15em;
    margin-right: 1px;
    font-family: 'Cambria Math', 'Times New Roman', serif;
    line-height: 1;
  }
  .radicand {
    border-top: 1.6px solid currentColor;
    padding-top: 1px;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 1.2;
  }
  ```
- **Đặc tính sư phạm:** Dấu căn $\sqrt{}$ nối liền mạch với thanh ngang vinculum phía trên toàn bộ biểu thức dưới căn, giúp học sinh phân định trực quan chính xác phần trong căn và phần ngoài căn chuẩn SGK.

### 3.3. Chuẩn Hóa Phân Số Đồng Bộ Màu Sắc Tuyệt Đối (Color Inheritance & currentColor)
- **Cấu trúc HTML thuần:**
  ```html
  <span class="fraction"><span class="numerator">Tử số</span><span class="denominator">Mẫu số</span></span>
  ```
- **Quy chuẩn CSS:**
  ```css
  .fraction {
    display: inline-flex;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
    padding: 0 0.2em;
    font-size: 0.95em;
    color: inherit;
  }
  .numerator {
    border-bottom: 1.6px solid currentColor;
    padding-bottom: 1px;
    line-height: 1.1;
  }
  .denominator {
    padding-top: 1px;
    line-height: 1.1;
  }
  ```
- **Đồng bộ màu sắc tuyệt đối:**
  - Toàn bộ tử số, mẫu số và gạch phân số phải luôn dùng `color: inherit;` và `border-bottom: 1.6px solid currentColor;`.
  - Trong tiêu đề câu hỏi và các phương án trắc nghiệm: Phân số hiển thị đồng màu trắng hoàn toàn với văn bản xung quanh (#ffffff / #f8fafc).
  - Khi hiển thị kết quả đáp án:
    - **Đáp án ĐÚNG:** Toàn bộ tử số, mẫu số và gạch phân số tự động mang màu xanh ngọc `#a7f3d0`.
    - **Đáp án SAI:** Toàn bộ tử số, mẫu số và gạch phân số tự động mang màu đỏ nhạt `#fecaca`.

### 3.4. Chuẩn Hóa Các Ký Hiệu Toán Học & Vật Lí Bằng Unicode Thuần (Zero Raw LaTeX)
- **100% Không dùng mã LaTeX thô (`$...$`, `\cdot`, `\approx`, `\frac`, `\text{...}`):** Toàn bộ dữ liệu JSON/HTML phải dùng Unicode chuẩn và thẻ HTML trực tiếp.
- **Bảng quy chuẩn ký hiệu:**
  - **Tích vô hướng / Phép nhân:** Dùng dấu chấm trung tâm `·` (`&middot;` hoặc Unicode `\u00B7`). Tuyệt đối không dùng dấu sao `*` hoặc dấu nhân `×` cho tích vô hướng.
  - **Góc & Độ:** Dùng `30°`, `60°`, `90°` (ký hiệu độ `°`), góc `∠ABC` hoặc `(u, v)`.
  - **Giới hạn (Limit):** `lim` kết hợp thẻ `<sub>`, ví dụ `lim<sub>x→2</sub> f(x)`.
  - **Tích phân & Đạo hàm:** Dùng `∫` với cận `<sub>` và `<sup>`, đạo hàm `f'(x)`, `y''`.
  - **Ký hiệu tập hợp & Logic:** `∈, ∉, ⊂, ∪, ∩, ∅, ∀, ∃, ⇒, ⇔`.
  - **Số mũ & Chỉ số dưới:** Dùng trực tiếp thẻ `<sup>` và `<sub>` hoặc ký tự Unicode chuẩn (`x²`, `y³`, `x₁`, `x₂`, `⁻¹`, `⁻²`).
  - **Hằng số & Đại lượng:** `π, ≈, ≠, ≤, ≥, Δ, α, β, γ, λ, ρ, ω`.
  - **Ký hiệu hạt nhân phóng xạ:** `<span class="isotope"><sup>A</sup><sub>Z</sub>X</span>`.

### 3.5. Khung Công Thức Nổi Bật Sư Phạm Trong Lời Giải (.formula-box)
- Công thức nằm trong khung lời giải chi tiết được đặt trong `.formula-box` mang màu xanh cyan `#38bdf8` làm điểm nhấn sư phạm.
- **Nền & Viền:** Nền kính mờ `rgba(56, 189, 248, 0.08)`, viền `1px solid rgba(56, 189, 248, 0.25)`, bo góc `8px`, đệm lề thoáng đãng `8px 14px`.

---

## 4. QUY TẮC ĐIỀU HƯỚNG BẰNG BÀN PHÍM (KEYBOARD NAVIGATION)
- **Phím điều hướng câu hỏi (Mũi tên Trái / Phải):**
  - **Phím Mũi tên Trái (ArrowLeft):** Lùi về câu hỏi trước đó (`prevQuestion()`).
  - **Phím Mũi tên Phải (ArrowRight):** Chuyển sang câu hỏi tiếp theo (`nextQuestion()`).
- **Phím điều hướng bài học (Mũi tên Lên / Xuống):**
  - **Phím Mũi tên Lên (ArrowUp):** Lùi về bài học trước đó (`prevLesson()` - ví dụ từ Bài 2 về Bài 1).
  - **Phím Mũi tên Xuống (ArrowDown):** Chuyển sang bài học tiếp theo (`nextLesson()` - ví dụ từ Bài 1 sang Bài 2).
- **Cơ chế an toàn & Cách ly:**
  - **Giới hạn câu hỏi:** Đang ở Câu 1, bấm phím Trái giữ nguyên Câu 1, không bị âm chỉ số. Đang ở Câu 10 (câu cuối), bấm phím Phải không tự ý nộp bài đột ngột trong chế độ Thi thử; trong chế độ Luyện tập chỉ xem bảng điểm tổng kết khi câu hỏi đã được kiểm tra xong.
  - **Giới hạn bài học:** Đang ở Bài 1, bấm phím Lên giữ nguyên Bài 1; đang ở bài cuối cùng, bấm phím Xuống giữ nguyên bài cuối cùng. Trong chế độ Thi thử nếu có câu đã làm dở dang, hỏi xác nhận học sinh trước khi chuyển bài để tránh mất kết quả thi.
  - **Vô hiệu hóa form controls:** Vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong ô `input`, `textarea`, dropdown `select`, hoặc khi đang mở Modal chỉnh sửa tên giáo viên.
  - **Chặn cuộn trang:** Kích hoạt `e.preventDefault()` để chặn thanh cuộn màn hình nhảy ngoài ý muốn khi bấm các phím mũi tên.

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
  * **Cụm quản trị & cấu hình (Bên trái):** [👨‍🏫 Thầy Trần Mạnh Tùng ✏️] (có thể nhấp đổi tên giáo viên và lưu localStorage) + [Menu chọn 25 bài học ⌄] + [A- | % | A+] (Bộ chỉnh cỡ chữ) + [📊 Học Bạ] (Bảng điểm tiến độ).
  * **Cụm thi đấu & điều hướng (Bên phải):** [📘 Luyện Tập | ⏱️ Thi Thử] + [Đồng hồ đếm ngược kỹ thuật số] + [Mini-map 1..10] (Chuyển câu tức thì chỉ với 1 chạm).
* **Tối giản hóa tối đa & Chuẩn nhận diện:** Không có chữ 'CTN', không có mã QR code, không có nút mở trang riêng lẻ để giữ thanh Header luôn thanh thoát, hiện đại và tập trung 100% vào việc học.

### 5.4. Hệ thống Typography Chuẩn Tiếng Việt & Bộ Điều Khiển Cỡ Chữ Linh Hoạt (Font Scaler)
* **Font Stack Hiện Đại & Chuẩn Mực Glyph Tiếng Việt:**
  - Tuyệt đối không đưa `'SF Pro Display'` vào đầu font stack vì trên Windows, font cài lậu/thiếu dấu chỉ chứa ký tự ASCII, dẫn đến lỗi văng font serif/Times New Roman đối với các nguyên âm có dấu (`Ắ, Ầ, Ấ, Ư, Ờ, Ộ`).
  - Chuẩn hóa Font Stack tối tân: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif` kết hợp nhúng Google Fonts `Plus Jakarta Sans` (`wght@400;500;600;700;800;900`).
  - **Bắt buộc kế thừa phông cho Form Controls & Nút bấm:** Trình duyệt không tự kế thừa font cho `button, input, select, textarea`. Bắt buộc khai báo toàn cục:
    `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
  - **Quy chuẩn độ đậm & Kiểu chữ tiếng Việt:** Tránh dùng `font-weight: 900` kết hợp All-Caps cho tiếng Việt có dấu phức tạp nếu font hệ thống không có native black weight (tránh lỗi synthetic bolding). Khuyên dùng `font-weight: 800` hoặc `700`, và dùng Title Case chuẩn mực (ví dụ: *"Bắt Đầu Đấu Trường Ngay"*) để chữ đều tăm tắp, tròn trịa và sang trọng.
* **Bộ Phím Tăng Giảm Kích Cỡ Chữ Tức Thời (A- | % | A+):** Cung cấp 4 mức tỷ lệ hiển thị (90% - 100% - 115% - 130%) lưu tự động vào localStorage.setItem('VT12_FONT_SCALE_IDX'). Toàn bộ văn bản, công thức, bảng Đúng/Sai và lời giải đều co giãn mượt mà theo biến --font-scale.

---

## 6. NGUYÊN TẮC KỸ THUẬT: ĐỒ THỊ VECTOR SVG & CÔNG THỨC THUẦN CSS
* **100% Không dùng ảnh raster (.png, .jpg):** Tránh hiện tượng mờ nhòe, vỡ hạt hoặc mất liên kết ảnh khi chia sẻ offline.
* **Đồ họa SVG khoa học phong cách Dark Neon:** Tự vẽ trực tiếp bằng các thẻ <svg>, <line>, <circle>, <path>, <rect> với màu sắc phát quang tương phản cao (#38bdf8, #34d399, #f43f5e, #fbbf24).
* **Không làm lộ đáp án:** Tuyệt đối không bao giờ ghi kết quả tính toán hay đánh dấu lộ đáp án trực tiếp trên hình vẽ đồ thị.
* **Cơ chế lấp đầy không gian còn trống (Dynamic Space-Filling):**
  * Khung .graph-box mở rộng trọn vẹn 100% chiều rộng cột (width: 100%).
  * Khung .graph-container sử dụng flex: 1 và giới hạn tối đa lên tới 52vh (max-height: 52vh).
  * Hình vẽ tự động tính toán kích thước dựa trên khoảng trống còn lại bên dưới đề bài, mở lớn tối đa mà vẫn giữ nguyên tỷ lệ chuẩn mực (object-fit: contain).

---

## 7. NGUYÊN TẮC TƯƠNG TÁC ĐA GIÁC QUAN (AUDIO & GAMIFICATION)

### 7.1. Âm thanh Web Audio API tổng hợp độc lập 100% (Offline Sound Synth)
Không sử dụng file âm thanh nén bên ngoài (.mp3, .wav) để đảm bảo không bị chặn chính sách bảo mật trình duyệt hay lỗi đường dẫn. Toàn bộ âm thanh được tổng hợp thời gian thực bằng Web Audio API với hiệu ứng ngân vang phong phú:
* **Âm thanh Click nút (playClick()):** Tiếng pop bong bóng giòn tan, thanh thoát (0,05 giây, 600 Hz -> 900 Hz).
* **Âm thanh Đúng (playCorrect()):** Kéo dài 1,4 giây với chuỗi rải hợp âm ngũ cung tươi sáng Arpeggio 5 nốt (E5 -> G5 -> B5 -> E6 -> G6) kết hợp chuông ngân lấp lánh (Sparkling Shimmer).
* **Âm thanh Sai (playWrong()):** Kéo dài 0,9 giây với giai điệu trượt 3 nốt nhẹ nhàng (G3 -> E3 -> C3), mang tính động viên học sinh thử lại thay vì âm thanh chói gắt tiêu cực.
* **Âm thanh Khải Hoàn (playWin()):** Kéo dài 2,8 giây với khúc ca khải hoàn Triumphant Fanfare mô phỏng kèn đồng Synth đa âm ngân vang rực rỡ khi học sinh đạt điểm tuyệt đối.

### 7.2. Hiệu ứng hạt rơi rực rỡ (Canvas Confetti)
Mỗi khi học sinh hoàn thành đúng câu hỏi hoặc nộp bài thi thử đạt điểm số cao, kích hoạt hiệu ứng pháo hoa màu rơi trên màn hình bằng <canvas> thuần để tạo cảm xúc khích lệ học tập.

---

## 8. NGUYÊN TẮC QUẢN TRỊ TIẾN ĐỘ & TỔ CHỨC TỆP ĐỘC LẬP

### 8.1. Bảng Học Bạ Tiến Độ 25 Bài Học (LocalStorage Dashboard)
* Tự động lưu điểm số cao nhất của từng bài học vào bộ nhớ trình duyệt localStorage (VT12_LESSON_SCORE_1 -> VT12_LESSON_SCORE_25).
* Phân nhóm trực quan theo 4 Chương của SGK Kết nối tri thức:
  * **Chương I: Vật lí nhiệt** (Bài 1 -> Bài 7)
  * **Chương II: Khí lí tưởng** (Bài 8 -> Bài 13)
  * **Chương III: Từ trường** (Bài 14 -> Bài 20)
  * **Chương IV: Vật lí hạt nhân** (Bài 21 -> Bài 25)
* Thống kê số bài đã làm, Điểm trung bình và Tổng điểm tích lũy; cho phép nhấp chuyển nhanh bài học hoặc xóa lịch sử điểm để ôn tập lại từ đầu.

### 8.2. Cấu trúc đóng gói hoàn chỉnh (Standalone & Inlined Hub)
* **Cổng Tổng Hợp Master Hub:** 1 tệp HTML duy nhất tích hợp trọn vẹn toàn bộ 250 câu hỏi của 25 bài học, bảng học bạ, bộ chọn bài, bộ đếm giờ và bộ tạo âm thanh. Thầy cô chỉ cần gửi duy nhất 1 file HTML qua Zalo lớp là học sinh có thể sử dụng trọn đời 100% offline trên mọi thiết bị (máy tính, iPad, điện thoại).
* **Bộ 25 tệp độc lập:** Mỗi bài học có thể hoạt động riêng lẻ như một ứng dụng độc lập, thuận tiện cho giáo viên gửi từng bài sau mỗi tiết dạy trên lớp.

---

## 9. QUY TRÌNH & CÔNG NGHỆ TẠO WEB HỆ THỐNG TRẮC NGHIỆM - ĐẤU TRƯỜNG VẬT LÍ (FULL WEB ARCHITECTURE & DEPLOYMENT LIFECYCLE)

### 9.1. Kiến Trúc Dữ Liệu Nguồn Tập Trung (Data Layer - Single Source of Truth)
- **Tệp dữ liệu gốc bài học (`lessons_data.json` & `lessons_data.js`):**
  - Lưu trữ toàn bộ câu hỏi trắc nghiệm của 25 bài học (hoặc 85 bài học toàn diện 3 khối THPT).
  - Cấu trúc mỗi bài học chuẩn gồm 10 câu: 6 câu trắc nghiệm nhiều lựa chọn (MCQ), 2 câu Đúng/Sai (TF chùm 4 ý độc lập), 1 câu Ghép nối tương ứng (Match Pair) và 1 câu Điền khuyết từ khóa (Tap to Drop / Word Bank).
  - **Chuẩn hóa Unicode HTML thuần & Inline SVG (Zero Raw LaTeX):** Tuyệt đối không dùng mã LaTeX thô (`$...$`, `\frac`, `\cdot`, `\approx`, `\text`). Sử dụng ký hiệu Unicode trực tiếp (`·, ≈, π, λ, ρ, β, →, ², ³, ⁻¹`), thẻ HTML (`<sup>`, `<sub>`), phân số HTML (`<span class="fraction"><span class="numerator">...</span><span class="denominator">...</span></span>`), căn thức vinculum (`<span class="sqrt"><span class="rad">√</span><span class="radicand">...</span></span>`) và vectơ co giãn toàn phần Pure Inline SVG (`<span class="vec"><svg class="vec-arr"...>...</svg><span class="vec-sym">...</span></span>`).
  - **Đồ họa SVG Dark Neon nội suy (Inline SVG):** Hình vẽ kỹ thuật, đồ thị nhiệt, từ trường, chu kì bán rã được nhúng trực tiếp bằng các thẻ vector `<svg>`, `<path>`, `<circle>`, `<line>`, đảm bảo phóng to thu nhỏ không vỡ hạt và hiển thị 100% khi không có mạng.
- **Tệp dữ liệu Đấu Trường (`arena_questions_data.js`):**
  - Chuẩn hóa toàn bộ 850 câu hỏi từ 85 bài học của 3 khối Lớp 10 (34 bài), Lớp 11 (26 bài), Lớp 12 (25 bài).
  - Mọi câu hỏi phức tạp (Đúng/Sai, Ghép đôi, Điền khuyết) đều được chuyển đổi sư phạm sang định dạng trắc nghiệm phản hồi nhanh có 4 phương án rõ ràng, tối ưu cho cơ chế bấm chuông thi đấu tốc độ cao trên điện thoại di động.

### 9.2. Động Cơ Biên Dịch & Đóng Gói Tự Động (Monolithic Inlining & Build Engine)
- **Kịch bản biên dịch Node.js (`generate_suite.js`):**
  - Chạy lệnh: `node generate_suite.js`
  - Động cơ tự động đọc dữ liệu nguồn (`lessons_data.json`, `lessons_info.json`), kết hợp với các mô-đun mã nguồn mẫu (HTML5, Base CSS Dark Glassmorphism, Web Audio Synthesizer, Keyboard Navigation, Quiz Engine, Canvas Confetti) để xuất bản tự động:
    1. **Cổng Tổng Hợp Master Hub (`index.html`):** Tích hợp trọn vẹn toàn bộ các bài học trong một ứng dụng duy nhất; tích hợp thanh Header 1 hàng chống rớt dòng, Bảng Học Bạ LocalStorage phân nhóm 4 chương, bộ chuyển bài thông minh và 2 chế độ (Luyện tập giải thích chi tiết & Thi thử bấm giờ 10 phút có Bảng Rà Soát).
    2. **Bộ tệp bài học độc lập (`bai_01.html` đến `bai_25.html`):** Mỗi bài là một file HTML duy nhất (Monolithic Inlined SPA), nhúng sẵn toàn bộ CSS, JS, âm thanh và dữ liệu. Giáo viên có thể gửi trực tiếp từng file qua Zalo, Teams hoặc lưu vào USB để học sinh làm bài không cần cài đặt.
- **Quy chuẩn Font Stack & Tránh lỗi font tiếng Việt trên Windows:**
  - Font Stack chuẩn mực: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`.
  - Khai báo kế thừa bắt buộc cho form controls: `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }`.
  - Tuyệt đối không đưa `'SF Pro Display'` lên đầu để tránh lỗi hiển thị font serif gãy khúc trên hệ điều hành Windows.

### 9.3. Kiến Trúc Ngoại Tuyến Đột Phá (Offline-First Architecture & PWA)
- **Triết lý Zero External Dependencies (Không phụ thuộc mạng):**
  - 100% không dùng thư viện ngoài qua CDN (Không jQuery, không Bootstrap, không FontAwesome, không KaTeX/MathJax).
  - Không tải file âm thanh ngoài (`.mp3`, `.wav`) tránh lỗi nghẽn băng thông, lỗi 404 hoặc bị chặn chính sách Autoplay của trình duyệt.
- **Bộ tổng hợp âm thanh Web Audio API thời gian thực:**
  - Tổng hợp hoàn toàn bằng toán học và các nút `AudioContext`, `OscillatorNode`, `GainNode`:
    - `playClick()`: Hiệu ứng pop bong bóng thanh thoát (0,05s).
    - `playCorrect()`: Hợp âm ngũ cung rải Arpeggio 5 nốt + chuông ngân Shimmer (1,4s).
    - `playWrong()`: Giai điệu trượt 3 nốt nhẹ nhàng động viên (0,9s).
    - `playWin()`: Khúc ca khải hoàn Triumphant Fanfare đa âm (2,8s).
    - `soundExtremeBuzzer()`: Âm chuông bấm 3 tầng gameshow (Sub-punch + Laser zap + Metallic gong bell).
    - `playOpeningAnthem()`: Khúc ca xuất trận 140 BPM nảy lửa (5,5s).
    - `playVictoryFanfare5s()`: Khúc ca khải hoàn chiến thắng đấu trường (5,2s).
- **Cấu hình Ứng Dụng Web Tiến Bộ (Progressive Web App - PWA):**
  - **`manifest.json`:** Định nghĩa `display: "standalone"`, `orientation: "any"`, `background_color: "#070a14"`, `theme_color: "#070a14"`, icon độ phân giải cao 192x192 và 512x512.
  - **`sw.js` (Service Worker):** Thiết lập chiến lược lưu bộ nhớ đệm `Cache-First` (Cache falling back to Network). Tự động lưu toàn bộ mã HTML, JS, CSS, Font và Icon vào Cache Storage ngay trong lần truy cập đầu tiên.
  - **Khả năng cài đặt 1 chạm (Add to Home Screen):** Cho phép học sinh và giáo viên bấm "Cài đặt ứng dụng" trên iOS Safari, Android Chrome, Edge hoặc Cốc Cốc để đưa ứng dụng ra màn hình chính, khởi chạy toàn màn hình không có thanh địa chỉ, sử dụng vĩnh viễn trọn đời không cần Internet.

### 9.4. Kiến Trúc Đấu Trường Vật Lí Liên Nhóm (Wireless QR Buzzer Arena Architecture)
- **Cấu trúc trang Đấu Trường (`dau-truong-vat-li.html`):**
  - **Sảnh Chờ `#setupView`:** Bố cục 2 cột trực quan. Cột trái chọn Khối (10, 11, 12, Toàn diện 3 khối), Bài học, Số lượng câu hỏi; Cột phải tạo mã QR và hiển thị trạng thái kết nối 4 tổ theo thời gian thực (Zero Idle Time).
  - **Cơ chế tự động thích ứng số câu hỏi (Dynamic Question Adaptation):**
    - Khi chọn 1 Bài học cụ thể: Bắt buộc chỉ hiển thị 2 mức `[ 5 Câu ]` và `[ 10 Câu ]`, ẩn hoàn toàn mức 15, 20 câu để triệt tiêu lỗi chọn nhầm vượt quá số câu của bài.
    - Khi chọn Toàn khối hoặc Toàn diện 3 khối: Mở rộng 5 mức linh hoạt `[ 5 Câu ]`, `[ 10 Câu ]`, `[ 15 Câu ]`, `[ 20 Câu ]`, `[ 30 Câu ]`.
  - **Hạ tầng truyền thông không dây kép (Dual-Channel Realtime Engine):**
    - **Kênh WebSockets MQTT thời gian thực:** Kết nối qua broker MQTT công cộng (`wss://broker.emqx.io:8084/mqtt` hoặc tương đương), mã phòng 4 số ngẫu nhiên, độ trễ tín hiệu dưới 50ms giữa điện thoại học sinh và màn hình máy chiếu của giáo viên.
    - **Kênh nội bộ dự phòng (Local Fallback):** Hỗ trợ `BroadcastChannel` và sự kiện `storage` trên trình duyệt khi các thiết bị chạy trên cùng một máy hoặc kiểm thử nội bộ.
  - **Giao diện chuông bấm di động (`buzzer.html`):**
    - Nút bấm cảm ứng diện tích lớn, hỗ trợ rung phản hồi cảm ứng qua `navigator.vibrate()`.
    - Cơ chế khóa chuông nano-giây (First-to-Buzz Lockout): Ngay khi một đội bấm thành công, hệ thống lập tức phát âm chuông cực đại, đổi màu đèn tổ trên màn hình chính và khóa chuông của các đội còn lại.

### 9.5. Quy Trình Kiểm Thử Trực Quan & Xuất Bản Lên GitHub Pages (QA & Deployment Pipeline)
Mỗi chu kỳ phát triển, thêm câu hỏi hoặc nâng cấp tính năng bắt buộc thực hiện nghiêm ngặt theo 5 bước:
1. **Đồng bộ dữ liệu nguồn:** Cập nhật nội dung câu hỏi trong `lessons_data.json`, `lessons_data.js` và `arena_questions_data.js`.
2. **Biên dịch hệ thống:** Chạy lệnh `node generate_suite.js` để tái tạo toàn bộ Cổng Tổng Hợp Master Hub và các file bài học lẻ.
3. **Kiểm chứng bằng hình ảnh thực tế (BẮT BUỘC 100% theo Quy tắc 1):**
   - Sử dụng Chrome Headless chụp ảnh màn hình giao diện thực tế tại các độ phân giải PC (1280x800, 1920x1080) và Mobile (375x667, 390x844).
   - Gọi công cụ `view_file` xem trực quan ảnh chụp để kiểm tra: Không lỗi font tiếng Việt, không che khuất đồ thị SVG, nút bấm Title Case chuẩn mực, phân số đồng màu.
4. **Xuất bản lên GitHub Pages:**
   - Sao chép toàn bộ tệp cập nhật sang thư mục `WEB_DEPLOY`.
   - Thực hiện commit và push lên nhánh `main` của kho lưu trữ GitHub (`tikz-physics/trac-nghiem-vat-li-thpt`).
   - Kiểm tra trạng thái hoạt động tại địa chỉ Web chính thức: `https://tikz-physics.github.io/trac-nghiem-vat-li-thpt/`.
5. **Đồng bộ bộ quy tắc chuẩn mực đa thư mục:**
   - Sao chép tệp `GEMINI.md` đồng nhất 100% sang cả 3 khối: Thư mục Lớp 12 (`L12/C1/CAU HOI TONG KET BAI HOC/GEMINI.md`), Lớp 11 (`L11/CAU HOI TONG KET BAI HOC/GEMINI.md`) và Lớp 10 (`L10/CAU HOI TONG KET BAI HOC/GEMINI.md`).
   - Cập nhật tài liệu tổng kết `walkthrough.md`.

---

## 10. KÊNH PHÁT HÀNH, TRUYỀN THÔNG & QUẢNG BÁ SẢN PHẨM (COMMUNITY & SOCIAL OUTREACH)

### 10.1. Hệ thống Kênh Truyền Thông Chính Thức
* **Fanpage Facebook chính thức:** [T-Apps - Phần mềm hỗ trợ giáo viên](https://www.facebook.com/profile.php?id=61593943503646)  
  *(Địa chỉ liên kết: `https://www.facebook.com/profile.php?id=61593943503646`)*
* **Tác giả phát triển & định hướng chuyên môn:** Thầy Trần Mạnh Tùng.
* **Cổng ứng dụng Web Trực tuyến (PWA Offline):** `https://tikz-physics.github.io/trac-nghiem-vat-li-thpt/`

### 10.2. Quy Chuẩn Bài Viết Giới Thiệu & Quảng Bá (Marketing Guidelines)
Mọi bài viết truyền thông giới thiệu ứng dụng trên Fanpage và các cộng đồng giáo dục phải tuân thủ nghiêm ngặt các nguyên tắc sau:
1. **Khẳng định chuẩn mực sư phạm:** Nêu rõ bám sát Chương trình GDPT 2018 (SGK Kết nối tri thức với cuộc sống), định dạng cấu trúc đánh giá năng lực mới nhất của Bộ GD&ĐT 2025 (MCQ đảo vị trí, Đúng/Sai tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0, Ghép nối bản chất, Điền khuyết từ khóa).
2. **Nêu bật công nghệ PWA Offline 100%:** Nhấn mạnh tính năng mở trực tiếp trên mọi thiết bị di động (iPhone, Android, Máy tính bảng, PC) qua trình duyệt hoặc Zalo, và khả năng cài đặt ra màn hình chính để dùng trọn đời không cần Internet.
3. **Lời giải chi tiết sư phạm & Đồ họa Dark Neon:** Giới thiệu bộ đồ thị SVG vector phát quang sắc nét, công thức toán Unicode đồng màu, tính năng phóng to toàn màn hình hỗ trợ máy chiếu / bảng tương tác trên lớp.
4. **Kêu gọi hành động (Call to Action):** Cung cấp đầy đủ đường link truy cập trực tiếp, hướng dẫn học sinh thao tác một chạm và khuyến khích giáo viên chia sẻ miễn phí phục vụ giảng dạy.

### 10.3. Phong Cách Bài Viết & Cơ Chế Kéo Tương Tác (Comment-to-Receive Engagement)
Mọi bài viết quảng bá trên Fanpage T-Apps cần áp dụng cấu trúc kéo tương tác chuẩn mực đã được kiểm chứng hiệu quả:
1. **Tiêu đề quà tặng nổi bật:** Mở đầu bằng icon quà tặng (`🎁 CHIA SẺ MIỄN PHÍ: ...`) nêu rõ quy mô sản phẩm (Trọn bộ 3 khối lớp 10 - 11 - 12 hoặc từng lớp cụ thể, dùng 100% offline).
2. **Liệt kê tính năng cốt lõi súc tích:** Điểm nhanh các giá trị thiết thực (Luyện tập, thi thử bấm giờ, đồ họa SVG trực quan, học bạ lưu điểm, cài App dùng không cần mạng).
3. **Kêu gọi thả tim lan tỏa:** Sử dụng câu kêu gọi ấm áp, thân thiện (`❤️ Nếu thấy hay và hữu ích, hãy để lại cho mình 1 TYM để lan tỏa nhé!`).
4. **Cơ chế kêu gọi bình luận để nhận tài liệu (Bắt buộc):** Yêu cầu giáo viên để lại bình luận để nhận link ứng dụng hoặc tài nguyên (`💬 Thầy Cô cần nhận trọn bộ link web & bộ cài App Offline thì cứ ĐỂ LẠI BÌNH LUẬN bên dưới (kèm khối lớp đang dạy), mình sẽ gửi link ngay trong tin nhắn nhé!`). Kỹ thuật này giúp thuật toán Facebook đẩy tương tác tự nhiên lên cực cao.
5. **Hệ thống Hashtag định vị:** Đầy đủ `#TApps #PhanMemHoTroGiaoVien #VatLi10 #VatLi11 #VatLi12 #TracNghiemTuongTac #ChiaSeMienPhi #TaiLieuGiaoVien #CongNgheGiaoDuc`.

---

## 11. BỘ QUY CHUẨN ĐẤU TRƯỜNG VẬT LÍ LIÊN NHÓM (WIRELESS QR BUZZER ARENA)

### 11.1. Sảnh Thiết Lập Trận Đấu Trước Khi Vào Đấu Trường (`#setupView`)
- **Màn hình sảnh chờ mặc định:** Khi vào Đấu Trường, giao diện đầu tiên luôn là `#setupView` trước khi bước vào trận đấu.
- **Bố cục 2 cột cân xứng:**
  - **Cột trái (Thiết lập trận đấu):** Chọn Khối lớp (10, 11, 12, Toàn diện 3 khối), Chọn Bài học (phân nhóm theo từng chương) hoặc Toàn bộ bài học của khối, và Chọn Số lượng câu hỏi thi đấu.
  - **Cột phải (Kết nối QR thời gian thực - Zero Idle Time):** Hiển thị trực tiếp Mã phòng & Mã QR để học sinh các tổ quét kết nối điện thoại ngay trong khi giáo viên đang chọn bài; 4 đèn trạng thái báo `🟢 Đã kết nối` theo thời gian thực.
- **Nút "🚀 Bắt Đầu Đấu Trường Ngay ➔":** Sử dụng Title Case với `font-family: var(--font-family) !important; font-weight: 800;`, hiệu ứng phát quang xung nhịp, kích hoạt Khúc ca xuất trận 5,5s khi bắt đầu.
- **Nút "⚙️ Đổi Bài Học":** Luôn hiện diện trên thanh Header của màn hình thi đấu, cho phép giáo viên chuyển bài học bất kỳ lúc nào mà không cần tải lại trang.

### 11.2. Cơ Chế Tự Động Thích Ứng Số Lượng Câu Hỏi Theo Bài Học (Dynamic Question Adaptation)
- **Khi chọn 1 Bài học cụ thể:**
  - Giao diện BẮT BUỘC tự động co lại chỉ hiển thị 2 mức:
    - `[ 5 Câu (Nhanh ⚡) ]`
    - `[ 10 Câu (Toàn Bộ Bài Học 🎯) ]` *(Tự động kích hoạt mặc định)*
  - **Tuyệt đối ẩn/chặn các mức 15 câu, 20 câu** để triệt tiêu 100% lỗi người dùng bấm nhầm vượt quá số câu của bài học.
  - Hiển thị huy hiệu chỉ dẫn sư phạm: `💡 Bài học này có 10 câu hỏi chuẩn SGK. Đã tự động giới hạn số câu để không bị chọn nhầm vượt quá.`
  - Nếu người dùng trước đó đang chọn 15/20 câu ở chế độ Toàn khối rồi chuyển sang 1 bài lẻ, hệ thống tự động chuyển ngay về 10 câu.
- **Khi chọn "Toàn bộ bài học của khối" hoặc "Toàn Diện 3 Khối":**
  - Mở rộng linh hoạt 5 mức: `[ 5 Câu ]` • `[ 10 Câu (Chuẩn) ]` • `[ 15 Câu ]` • `[ 20 Câu ]` • `[ 30 Câu (Đại Chiến) ]`.
- **Cơ chế chốt chặn an toàn (Safety Clamping):**
  - Trong hàm `loadQuestionsForBattle`, luôn thực hiện:
    `const finalCount = Math.min(count, battleQuestions.length);` bảo đảm trò chơi vận hành mượt mà, không bao giờ lỗi.

### 11.3. Kho Dữ Liệu 850 Câu Hỏi Toàn Diện 3 Khối (85 Bài Chuẩn SGK)
- Đầy đủ 85 bài học chuẩn SGK mới (Lớp 10: 34 bài / 340 câu; Lớp 11: 26 bài / 260 câu; Lớp 12: 25 bài / 250 câu).
- Toàn bộ câu hỏi Đúng/Sai, Ghép nối và Điền khuyết đều được chuẩn hóa sang định dạng trắc nghiệm phản hồi nhanh, bảo đảm mỗi bài học có đúng 10 câu hỏi phong phú phục vụ bấm chuông thi đấu.

### 11.4. Động Cơ Âm Thanh Web Audio Đa Tầng Kích Thích & Sôi Động (>= 5 Giây)
- **Khúc Ca Xuất Trận (`playOpeningAnthem()`):** Kéo dài ít nhất 5 giây (chuẩn 5,5 giây), nhịp điệu dồn dập 140 BPM, dàn kèn đồng Synth đa âm + Bassline 12 nhịp nảy lửa, cao trào hợp âm khải hoàn ngân vang rực rỡ.
- **Khúc Ca Khải Hoàn Chiến Thắng (`playVictoryFanfare5s()`):** Kéo dài ít nhất 5 giây (chuẩn 5,2 giây), rải hợp âm ngũ cung lấp lánh (Arpeggio C5 -> G6) kết hợp kèn đồng Triumphant Brass và pháo hoa Confetti.
- **Âm Thanh Chuông Bấm Đa Tầng Kích Thích (`soundExtremeBuzzer()`):** Tổ hợp âm thanh 3 tầng mô phỏng Gameshow chuyên nghiệp:
  1. Sub-punch (Kick transient 220Hz ➔ 45Hz, gain 0.7): Cú nện âm trầm uy lực gây giật mình hưng phấn.
  2. Laser zap sweep (900Hz ➔ 1750Hz ➔ 750Hz sawtooth, gain 0.55): Quét laser sắc sảo đặc trưng chuông bấm gameshow.
  3. Metallic gong bell (3 bội âm 880Hz, 1320Hz, 1760Hz ngân dài 1,2s): Chuông đồng vang xa khắp phòng học.
### 11.5. Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng (Multi-Format Wireless Student Buzzer Engine)

#### 11.5.1. Bốn Định Dạng Bàn Bấm Chuông Thời Gian Thực
Thay vì chỉ hỗ trợ 4 nút trắc nghiệm A-B-C-D đơn điệu, bàn bấm chuông di động (`buzzer.html`) tích hợp 4 bàn điều khiển chuyên biệt theo đúng định dạng câu hỏi của kỳ thi:
1. **Bàn Trắc Nghiệm 4 Phương Án (`#pad_mcq`):**
   - 4 nút cảm ứng khổng lồ A, B, C, D xếp lưới 2x2.
   - Thao tác 1 chạm (One-Touch Instant Submit): Chạm là gửi ngay lập tức, ghi nhận thời gian phản hồi chính xác đến mili-giây.
2. **Bàn Đúng / Sai Chùm 4 Mệnh Đề (`#pad_tf`):**
   - 4 hàng tương ứng với 4 nhận định độc lập `a)`, `b)`, `c)`, `d)`.
   - Mỗi hàng gồm 2 nút gạt công thái học: `[ 🟢 Đ ]` (Đúng) và `[ 🔴 S ]` (Sai), đổi màu neon rực rỡ khi được chọn.
   - Nút nộp bài tổng hợp hiển thị bản xem trước kết quả thời gian thực: `🚀 GỬI ĐÁP ÁN (Đ - S - Đ - Đ)` hoặc `(Chưa chọn đủ 4 ý)`.
3. **Bàn Ghép Nối Tương Ứng (`#pad_match`):**
   - 4 hàng mục Cột A (`1.`, `2.`, `3.`, `4.`), mỗi hàng gắn kèm cụm nút chọn nhanh Cột B (`A`, `B`, `C`, `D`).
   - Giao diện dạng viên thuốc (Pill buttons), tự động làm nổi bật cặp ghép đã chọn.
   - Nút nộp bài tổng hợp: `🚀 GỬI GHÉP NỐI (1-B, 2-A, 3-D, 4-C)`.
4. **Bàn Điền Khuyết / Trả Lời Ngắn Chế Độ Kép (`#pad_fill`):**
   - Tích hợp 2 chế độ tương tác linh hoạt: **Gõ Chữ / Từ Khóa** và **Bàn Phím Số**.
   - Thanh chuyển đổi 1 chạm (`#fillModeSwitch`): `[ ✍️ Gõ Chữ & Từ Khóa ]` ↔ `[ 🔢 Bàn Phím Số Nhanh ]`.

#### 11.5.2. Chế Độ Kép Cho Câu Hỏi Điền Khuyết (Fill-in Dual Mode)
- **Chế độ 1: ✍️ Gõ Chữ & Ngân Hàng Từ Khóa (Text & Word Bank Mode):**
  - Dành cho các câu hỏi điền từ, cụm từ khoa học, danh pháp hoặc khái niệm (ví dụ: *đồng biến, nghịch biến, tỏa nhiệt, thu nhiệt, tăng, giảm, kết tủa...*).
  - Ô nhập văn bản lớn `#fillInputText` kích hoạt bàn phím ảo tiếng Việt của điện thoại di động, hỗ trợ gõ nhanh phím `Enter` trên bàn phím để gửi bài tức thì.
  - **Ngân Hàng Từ Khóa Chạm Nhanh (Word Bank Chips):** Lưới các từ khóa phổ biến được thiết kế dạng nút bấm nhỏ gọn viền neon. Học sinh chỉ cần chạm 1 lần là từ khóa tự động nhảy vào ô nhập và sẵn sàng bấm gửi.
  - **Ngân Hàng Từ Khóa Động Theo Câu Hỏi (Dynamic Word Bank):** Khi Host phát câu hỏi có kèm mảng từ khóa `words: [...]`, giao diện chuông học sinh sẽ ưu tiên nạp chính xác các từ này lên đầu thanh từ khóa gợi ý.
- **Chế độ 2: 🔢 Bàn Phím Số Nhanh (15-Key Touch Numpad Mode):**
  - Dành cho các câu hỏi tính toán giá trị số, tọa độ, hằng số hoặc kết quả định lượng.
  - Màn hình hiển thị số `#fillDisplay` cỡ chữ lớn (1.85rem), căn giữa, màu neon vàng hổ phách `#fde047`.
  - Bàn phím số 15 phím vật lý công thái học:
    - Hàng 1: `[ 1 ]`, `[ 2 ]`, `[ 3 ]`
    - Hàng 2: `[ 4 ]`, `[ 5 ]`, `[ 6 ]`
    - Hàng 3: `[ 7 ]`, `[ 8 ]`, `[ 9 ]`
    - Hàng 4: `[ ± ]` (Đổi dấu âm/dương), `[ 0 ]`, `[ . ]` (Dấu thập phân)
    - Hàng 5: `[ C ]` (Xóa hết), `[ ⌫ ]` (Xóa lùi 1 ký tự), `[ 🚀 GỬI ]` (Gửi kết quả số).

#### 11.5.3. Ngân Hàng Từ Khóa Chuyên Sâu Theo Từng Môn Học (Subject-Specific Word Banks)
Hệ thống chuông bấm định nghĩa sẵn ngân hàng từ khóa chuẩn mực cho từng môn học để hỗ trợ học sinh thao tác nhanh nhất trên thiết bị di động:

- **1. Ngân Hàng Từ Khóa Môn Vật Lí:**
  - *Biến thiên & Chiều hướng:* `tăng`, `giảm`, `không đổi`, `cân bằng`, `hút`, `đẩy`, `cùng chiều`, `ngược chiều`.
  - *Nhiệt động & Chất khí:* `nhiệt lượng`, `nội năng`, `công`, `nhiệt độ`, `đẳng nhiệt`, `đẳng tích`, `đẳng áp`, `phân tử`.
  - *Từ trường & Cảm ứng:* `cảm ứng từ`, `từ thông`, `suất điện động`, `lực từ`, `lực Loren-xơ`.
  - *Vật lí hạt nhân:* `phóng xạ`, `phân hạch`, `nhiệt hạch`, `hụt khối`, `năng lượng liên kết`, `chu kì bán rã`.

- **2. Ngân Hàng Từ Khóa Môn Hóa Học:**
  - *Nhiệt động & Cân bằng:* `tỏa nhiệt`, `thu nhiệt`, `tăng`, `giảm`, `không đổi`, `chuyển dịch thuận`, `chuyển dịch nghịch`, `cân bằng hóa học`.
  - *Hiện tượng & Dấu hiệu:* `kết tủa`, `khí thoát ra`, `kết tủa trắng`, `kết tủa đỏ gạch`, `sủi bọt khí`, `mất màu`, `đổi màu xanh`, `cháy sáng`.
  - *Loại phản ứng & Bản chất:* `axit`, `bazơ`, `oxi hóa`, `khử`, `thủy phân`, `este hóa`, `trùng hợp`, `xà phòng hóa`.
  - *Chất & Nhóm chất hữu cơ/vô cơ:* `este`, `ancol`, `ankan`, `anken`, `ankin`, `amin`, `amino axit`, `peptit`, `protein`, `glucozơ`, `fructozơ`, `saccarozơ`, `tinh bột`, `xenlulozơ`.
  - *Liên kết & Cấu tạo:* `liên kết ion`, `liên kết cộng hóa trị`, `liên kết hiđro`, `kim loại`, `phi kim`.

- **3. Ngân Hàng Từ Khóa Môn Toán Học:**
  - *Tính chất hàm số & Đồ thị:* `đồng biến`, `nghịch biến`, `cực đại`, `cực tiểu`, `dương`, `âm`, `bằng 0`, `vô số`, `vô nghiệm`, `nghiệm kép`.
  - *Đường tiệm cận & Tương giao:* `tiệm cận đứng`, `tiệm cận ngang`, `tiệm cận xiên`, `song song`, `vuông góc`, `tiếp xúc`, `cắt nhau`, `trùng nhau`, `chéo nhau`.
  - *Hình học & Vectơ:* `đồng phẳng`, `cùng phương`, `ngược hướng`, `tọa độ`, `trọng tâm`, `tâm đối xứng`, `mặt cầu`, `mặt phẳng`.
  - *Giải tích & Ký hiệu:* `π`, `e`, `+∞`, `-∞`, `vô cực`, `liên tục`, `gián đoạn`, `nguyên hàm`, `tích phân`, `đạo hàm`.

#### 11.5.4. Động Cơ Chấm Điểm Đa Định Dạng & Chuẩn Hiển Thị Olympia Live Bar
- **Bảng Trực Tiếp Olympia Tại Màn Hình Host (Olympia Live Bar):**
  - Khi học sinh gửi đáp án, Host cập nhật ngay thanh trạng thái gồm: Avatar đội, Tên tổ, Icon định dạng (`⚡` MCQ, `⚖️` Đúng/Sai, `🔗` Ghép đôi, `✍️` Điền chữ, `🔢` Điền số), Nội dung câu trả lời và Thời gian phản hồi tính bằng giây.
- **Động Cơ So Khớp & Chấm Điểm Thông Minh (Smart Multi-Format Grading Engine):**
  - *Trắc nghiệm MCQ:* So khớp mã phương án chính xác (`A`, `B`, `C`, `D`).
  - *Đúng / Sai:* So khớp chuỗi tổ hợp hoặc mảng boolean (`Đ-S-Đ-Đ` hoặc `[true, false, true, true]`).
  - *Ghép nối:* So khớp cấu trúc cặp ghép dạng object `{1: "B", 2: "A", 3: "D", 4: "C"}`.
  - *Điền khuyết chuỗi văn bản:*
    - Chuẩn hóa chuỗi bằng cách loại bỏ khoảng trắng thừa và chuyển về chữ thường (`answer.trim().toLowerCase()`).
    - Hỗ trợ mảng đáp án đồng nghĩa hoặc cách viết tương đương: `acceptableAnswers: ["tỏa nhiệt", "toả nhiệt", "phản ứng tỏa nhiệt"]`.
  - *Điền khuyết giá trị số:* So khớp giá trị số thực với ngưỡng sai số cho phép: `Math.abs(parseFloat(studentAns) - parseFloat(correctAns)) < 0.01`.
- **Quy Chuẩn Chống Tràn Giao Diện Di Động (Zero-Clipping Guard):**
  - Thẻ bao ngoài bàn bấm `#buzzerView` luôn khai báo `max-width: 440px; padding: 8px; box-sizing: border-box; margin: 0 auto;`.
  - Thanh chuyển đổi tab 4 định dạng `.student-format-tabs` sử dụng CSS Grid 4 cột đều nhau: `display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; box-sizing: border-box;`.
  - Bảo đảm trên mọi kích cỡ màn hình di động (từ 360px đến 480px), giao diện không bao giờ bị cắt viền, tràn ngang hay che lấp các nút bấm quan trọng.

### 11.6. Quy Chuẩn Màn Hình Xuất Máy Chiếu Chuyên Dụng (Projector Presentation Screen Engine)
*Áp dụng đồng bộ cho cả 3 môn: Vật Lí, Toán Học, Hóa Học*

- **Nguyên Tắc Trọng Tâm: Triệt Tiêu 100% Nội Dung Thừa Của Giáo Viên (Zero Host Distraction):**
  - Màn hình máy chiếu chiếu lên phông bạt/bảng lớp học **chỉ tập trung 100% vào nội dung cần chiếu** cho toàn thể học sinh theo dõi; loại bỏ hoàn toàn các thanh điều khiển và cấu hình thừa dành riêng cho giáo viên.
  - **Ẩn hoàn toàn Thanh công cụ điều khiển của Host (`.control-toolbar`):** Ẩn các nút Tiếp Tục (Space), Khóa & Hiện Đáp Án (Enter), Hộp Quà Bí Mật, Câu Trước, Câu Tiếp Theo.
  - **Ẩn toàn bộ Nút quản trị trên Header (`.btn-host-admin`):** Ẩn các nút `[⚙️ Đổi Bài Học]`, `[📽️ Xuất Máy Chiếu]`, `[👁️ Chế Độ Chiếu (P)]`, `[🔄 Đấu Lại]`, và huy hiệu trạng thái mạng `[🟢 Online]`. Chỉ giữ lại Tên môn học, Mã QR / Mã Phòng (`[📱 Mã QR (VT88)]`) và Nút `[⛶ Toàn Màn Hình]`.
  - **Ẩn các Nút điều chỉnh điểm thủ công (`.team-controls`):** Ẩn các nút `+10`, `+20`, `-10` trên từng thẻ tổ ở chân trang (chỉ hiển thị tên tổ, avatar, trạng thái kết nối và điểm số lớn 2.2rem+).
  - **Vô hiệu hóa thao tác nhấp chuột trên phương án (`.option-btn`):** Thiết lập `cursor: default !important;` để không gây hiểu nhầm học sinh/giáo viên có thể nhấp chọn trực tiếp trên màn hình máy chiếu.
- **Tập Trung Tối Đa & Tối Ưu Tầm Nhìn Cho Cả Lớp:**
  - **Tiêu đề câu hỏi lớn & tương phản cao:** Font size `1.6rem !important;`, `font-weight: 800; color: #ffffff;`, đổ bóng viền sáng `text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7)`.
  - **Đồ thị Vector SVG tự động co giãn thích ứng (Adaptive Space-Filling Graph):**
    - Khi đang làm bài: Đồ thị mở rộng tối đa `max-height: 240px;` (SVG cao `220px`) để học sinh ngồi bàn cuối lớp quan sát rõ nét từng chi tiết.
    - Khi hiện kết quả (`.battle-card.is-revealed`): Đồ thị tự động co gọn còn `max-height: 140px;` (SVG cao `130px`) và các ô phương án co gọn (`min-height: 48px; padding: 10px 16px;`) giúp Bảng Tổng Hợp Vòng Đấu Olympia và Khung Giải Thích Bản Chất Khoa Học hiển thị trọn vẹn trên màn hình 1080p/900p mà **không cần cuộn trang**.
  - **4 Phương án A, B, C, D cỡ lớn:** Font size `1.2rem !important;`, tiền tố A, B, C, D nổi bật `36px × 36px` với `font-weight: 900;`. Khi mở đáp án, phương án đúng phát quang xanh ngọc neon (#10b981 / #a7f3d0) với viền ngọc rực rỡ.
  - **Thanh Olympia Live Bar trực quan:** Cập nhật thời gian thực từng tổ nộp bài kèm thời gian phản hồi mili-giây (`Tổ 1: ⚡ [ A ] (1.85s)`).
  - **Bảng Tổng Hợp Vòng Đấu Olympia (Olympia Results Card):** Tôn vinh các tổ đạt điểm theo thang bậc Olympia với huy chương vàng 🥇 (+40đ), bạc 🥈 (+30đ), đồng 🥉 (+20đ, +10đ) và cảnh báo ❌ cho các tổ chọn sai (+0đ).
  - **Khung Giải Thích Chi Tiết Sư Phạm (.explanation-box):** Nổi bật với khung công thức `.formula-box` mang màu xanh cyan `#38bdf8`, giải thích rõ hiện tượng, bản chất hóa học/vật lí/toán học.
- **Hỗ Trợ Toàn Diện 2 Chế Độ Trình Chiếu (Dual Projector Architecture):**
  1. **Chế độ 2 Màn hình Mở rộng (Extended Desktop Mode - Khuyên dùng):**
     - Giáo viên bấm nút `[📽️ Xuất Máy Chiếu]` trên màn hình Host.
     - Hệ thống mở một cửa sổ mới riêng biệt có tham số `?role=projector&room=ROOM_CODE`.
     - Script trong `<head>` tự động gắn class `html.role-projector` ngay khi tải trang, ngăn hiện tượng chớp nháy giao diện (FOUC).
     - **Đồng bộ 100% thời gian thực 2 chiều:** Kết hợp `BroadcastChannel` và `MQTT Broker`. Cửa sổ máy chiếu phát tín hiệu `PROJECTOR_HELLO`, Host phản hồi ngay lập tức gói tin `PROJECTOR_SYNC` chứa toàn bộ trạng thái (câu hỏi hiện tại, thời gian đếm ngược, trạng thái nộp bài, điểm số 4 tổ). Mọi thao tác đổi câu (`START_QUESTION`), đếm giờ (`TIMER_SYNC`), khóa đáp án (`QUESTION_RESULT`), cập nhật điểm (`SCORE_UPDATE`), mở bục vinh danh (`VICTORY_PODIUM`) đều truyền tức thời không độ trễ (< 5ms) và sử dụng cờ `isRemote = true` để chống vòng lặp phản hồi (Zero Echo Loop).
  2. **Chế độ 1 Màn hình Nhân bản (Mirrored / Duplicate Display Mode):**
     - Dành cho các lớp học chỉ có 1 màn hình duy nhất (máy tính giáo viên nối trực tiếp cáp HDMI chiếu màn hình giống hệt lên tường).
     - Giáo viên bấm nút `[👁️ Chế Độ Chiếu (P)]` trên Header hoặc nhấn phím tắt **`P`** trên bàn phím.
     - Toàn bộ thanh điều khiển và nút quản trị thừa tự động ẩn đi qua lớp `body.projector-clean-mode`.
     - Một huy hiệu nổi phát quang mờ `.projector-clean-toggle-badge` xuất hiện ở góc dưới bên phải: `[⚙️ Hiện Thanh Điều Khiển (Phím P)]`. Giáo viên chỉ cần nhấn phím `P` hoặc nhấp vào huy hiệu để lấy lại thanh điều khiển tức thời mà không cần rời trang hay tải lại.
- **Sảnh Chờ Máy Chiếu Trang Trọng (Projector Lobby View):**
  - Khi chưa bắt đầu thi đấu, trên màn hình máy chiếu tự động ẩn cột chọn khối lớp/bài học/số câu (`#setupLeftCol`).
  - Cột Mã QR tự động căn giữa trang trọng (`max-width: 760px; margin: 0 auto;`): Hiển thị Tiêu đề giải đấu lớn, Mã QR phóng to sắc nét, Mã Phòng to đậm (`PHÒNG: VT88`), và trạng thái kết nối mạng của 4 tổ. Học sinh bước vào lớp là có thể quét mã tham gia ngay lập tức.

---

## 12. BỘ ĐẶC TẢ YÊU CẦU ĐỂ TẠO TRANG WEB TƯƠNG TỰ (SPECIFICATION BLUEPRINT & PROMPT TEMPLATE FOR CLONING SITES)

### 12.1. Mục Tiêu & Phạm Vi Áp Dụng
Bộ đặc tả này là **chuẩn mực kỹ thuật và sư phạm cao nhất**, được đóng gói dưới dạng Blueprint để người dùng hoặc AI có thể tái tạo ngay lập tức một hệ thống web trắc nghiệm tương tác và đấu trường bấm chuông tương tự cho **bất kỳ môn học nào khác** (Hóa học, Sinh học, Toán học, Lịch sử, Địa lí...) hoặc các dự án giáo dục mới theo chương trình GDPT 2018.

### 12.2. Danh Mục 10 Yêu Cầu Kỹ Thuật Cốt Lõi Bắt Buộc (Mandatory Technical Requirements)
1. **Kiến trúc Ngoại Tuyến 100% (Zero External Dependencies):**
   - Tuyệt đối không dùng CDN bên ngoài (không jQuery, không Bootstrap, không FontAwesome, không KaTeX/MathJax).
   - Không dùng file âm thanh ngoài (`.mp3`, `.wav`) để tránh lỗi chặn Autoplay hoặc lỗi tải mạng.
2. **Đóng Gói Độc Lập (Monolithic Inlined HTML):**
   - Mỗi bài học xuất bản thành 1 file `.html` duy nhất (Single-File SPA), chứa trọn vẹn HTML5, CSS, JS, Audio Synthesizer và dữ liệu câu hỏi. Gửi qua Zalo/Email là mở làm bài được ngay.
   - Master Hub (`index.html`) tích hợp toàn bộ các bài học trong một ứng dụng duy nhất.
3. **Tiêu Chuẩn Ứng Dụng Web Tiến Bộ (PWA):**
   - Tích hợp `manifest.json` và `sw.js` theo cơ chế `Cache-First` (Cache falling back to Network).
   - Cho phép cài đặt ứng dụng một chạm (Add to Home Screen) trên iPhone Safari, Android Chrome, Windows Edge, hiển thị toàn màn hình độc lập như native app.
4. **Chuẩn Hóa Font Stack Tránh Lỗi Font Windows:**
   - Font Stack: `'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif`.
   - Khai báo bắt buộc kế thừa phông chữ: `*, button, input, select, textarea { font-family: var(--font-family); -webkit-font-smoothing: antialiased; }`.
   - Tuyệt đối không đưa `'SF Pro Display'` lên đầu font stack.
5. **Giao Diện Trọng Tâm & Không Cần Cuộn Chuột (Zero Wasted Space & No-Scroll):**
   - Trên PC/Laptop/Tablet ngang: Thẻ làm bài viền kính mờ Dark Glassmorphism, khống chế chiều cao trong `max-height: calc(100vh - 84px)`, căn giữa hoàn hảo cả ngang và dọc.
   - Trên mobile dọc: Tự động chuyển 1 cột mượt mà, hỗ trợ cuộn tự nhiên bằng 1 tay.
6. **Thanh Header 1 Hàng Duy Nhất (Single-Row Slim Header):**
   - Không bị rớt dòng trên PC/Laptop/iPad (`flex-wrap: nowrap`, cuộn ngang).
   - Tích hợp đầy đủ: [Tên Giáo Viên tùy biến ✏️] + [Menu chọn bài] + [Bộ đổi font A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer đếm ngược] + [Mini-map 1..10].
7. **Động Cơ Âm Thanh Web Audio API Tự Sinh Đa Tầng:**
   - Tạo trực tiếp bằng toán học sóng âm: Click nút bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông shimmer (1,4s), Sai trượt nốt nhẹ nhàng (0,9s), Khải hoàn fanfare (2,8s), Chuông bấm gameshow 3 tầng Sub-punch + Laser zap + Metallic gong bell, Khúc ca xuất trận 140 BPM (5,5s), Khúc ca chiến thắng (5,2s).
8. **Đấu Trường Bấm Chuông Không Dây (Wireless QR Buzzer Arena):**
   - Sảnh Chờ `#setupView` 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time).
   - Truyền thông kép: WebSockets MQTT thời gian thực (< 50ms) + Kênh nội bộ `BroadcastChannel`.
   - Cơ chế tự thích ứng số câu hỏi (Dynamic Question Adaptation): 1 bài lẻ chỉ cho chọn 5 hoặc 10 câu (chặn triệt để chọn 15/20 câu); toàn khối mở 5 mức (5, 10, 15, 20, 30 câu).
9. **Hệ Thống Bàn Bấm Chuông Học Sinh Đa Định Dạng (Multi-Format Buzzer Engine):**
   - Hỗ trợ đầy đủ 4 định dạng thi đấu tương ứng 4 loại câu hỏi: Trắc nghiệm A-B-C-D 1 chạm, Đúng/Sai 4 nhận định độc lập, Ghép đôi Cột A với Cột B, và Điền khuyết chế độ kép.
   - Chế độ kép cho câu hỏi điền khuyết: Tích hợp linh hoạt giữa chế độ **✍️ Gõ Chữ & Ngân Hàng Từ Khóa Chạm Nhanh** (cho khái niệm, danh pháp, tính chất) và **🔢 Bàn Phím Số Nhanh 15 Phím** (cho tính toán số liệu).
   - Chuẩn hóa ngân hàng từ khóa chuyên biệt theo từng môn học (Vật Lí, Hóa Học, Toán Học) và hỗ trợ nạp từ gợi ý động `words: [...]` theo câu hỏi.
   - Động cơ chấm điểm thông minh: Chuẩn hóa chuỗi ký tự không phân biệt hoa thường/dấu cách, hỗ trợ mảng từ đồng nghĩa và kiểm tra số thực trong ngưỡng sai số cho phép.
   - Chuẩn chống tràn tuyệt đối (Zero-Clipping Guard): Khống chế `max-width: 440px`, padding 8px, CSS Grid 4 cột hiển thị hoàn hảo trên 100% điện thoại di động.
10. **Hệ Thống Điều Hướng Bàn Phím Chuẩn Mực (Keyboard Navigation):**
   - Phím Mũi tên Trái / Phải: Đổi câu hỏi (Trái lùi câu trước `prevQuestion()`, Phải tiến câu sau `nextQuestion()`).
   - Phím Mũi tên Lên / Xuống: Đổi bài học (Lên lùi bài trước `prevLesson()`, Xuống tiến bài sau `nextLesson()`).
   - Cơ chế an toàn: Chặn âm index / vượt giới hạn, hộp thoại xác nhận khi đổi bài trong lúc thi thử dở dang, cách ly toàn bộ form controls (`input`, `textarea`, `select`, modal), chặn cuộn trang ngoài ý muốn (`e.preventDefault()`).
11. **Quy Chuẩn Màn Hình Xuất Máy Chiếu Chuyên Dụng (Projector Presentation Screen Engine):**
   - Triệt tiêu 100% nội dung thừa của giáo viên: Ẩn `.control-toolbar`, `.btn-host-admin`, `.team-controls`, và `#setupLeftCol` trên sảnh chờ.
   - Tối ưu không gian hiển thị cho lớp học: Tiêu đề câu hỏi lớn (1.6rem+), đồ thị SVG tự động co giãn (`max-height: 240px` khi thi đấu, `140px` khi hiện đáp án để không cuộn trang), 4 thẻ phương án to rõ (1.2rem+), đáp án đúng phát quang xanh ngọc neon (#10b981 / #a7f3d0).
   - Hiển thị đầy đủ Bảng Tổng Hợp Vòng Đấu Olympia (huy chương 🥇, 🥈, 🥉, +40đ..+10đ), Khung giải thích bản chất phát quang cyan (#38bdf8), và bảng điểm 4 đội chân trang.
   - Hỗ trợ 2 chế độ máy chiếu: Mở rộng (Extend Screen với `role=projector` đồng bộ 100% qua BroadcastChannel/MQTT) và Nhân bản (Duplicate / Mirror Screen với phím tắt `P` và huy hiệu phát quang nổi `.projector-clean-toggle-badge` khôi phục thanh điều khiển).

### 12.3. Danh Mục Yêu Cầu Sư Phạm Chuẩn GD&ĐT 2025
1. **Cấu Trúc 4 Định Dạng Câu Hỏi Đánh Giá Năng Lực (10 câu/bài):**
   - 6 câu MCQ (Đảo ngẫu nhiên 4 phương án bằng thuật toán Fisher-Yates mỗi lần làm bài).
   - 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d), tính điểm bậc thang: 1 ý = 0,1đ; 2 ý = 0,25đ; 3 ý = 0,5đ; 4 ý = 1,0đ.
   - 1 câu Ghép nối tương ứng (Match Pair) tiền tố 1, 2... ghép với A, B...
   - 1 câu Điền khuyết khép kín (Tap to Drop / Word Bank) với cả dạng điền từ khóa khoa học (văn bản) và dạng điền giá trị số (tính toán).
2. **Quy Chuẩn Hiển Thị Công Thức & Phân Số Thuần Unicode HTML:**
   - Zero Raw LaTeX: 100% không dùng mã `$...$`. Dùng trực tiếp Unicode (`·, ≈, π, λ, ρ, β, →, ², ³, ⁻¹`) và HTML (`<sup>, <sub>, <span class="fraction">`).
   - Phân số đồng màu tuyệt đối với văn bản xung quanh (`color: inherit; border-bottom: 1.6px solid currentColor;`).
3. **Nguyên Tắc Lời Giải Chi Tiết Sư Phạm:**
   - In hoa, in đậm thẻ đáp án đúng ở đầu khung phản hồi.
   - Trình bày mạch lạc theo 3 bước tư duy: Hiện tượng/Định luật $\rightarrow$ Công thức đại số $\rightarrow$ Thay số & đơn vị.
   - Tích hợp Bảng Rà Soát Chi Tiết 10 câu sau khi nộp bài thi thử.

---

### 12.4. Mẫu Prompt Chuẩn Một Chạm (Master Reusable Prompt Template)
*Giáo viên hoặc lập trình viên chỉ cần sao chép toàn bộ đoạn prompt dưới đây, thay thế thông tin môn học trong ngoặc vuông `[...]` và gửi cho AI để tạo ngay một hệ thống web mới:*

```text
Hãy đóng vai trò là Chuyên gia Lập trình Web Giáo dục & Chuyên gia Sư phạm THPT. 
Hãy tạo một Hệ thống Web Trắc Nghiệm Tương Tác và Đấu Trường Liên Nhóm cho môn [TÊN MÔN HỌC - VÍ DỤ: HÓA HỌC 12 / TOÁN 12 / VẬT LÍ 12] theo Chương trình GDPT 2018 (Bộ sách: [KẾT NỐI TRI THỨC VỚI CUỘC SỐNG]), tuân thủ 100% các tiêu chuẩn kỹ thuật và sư phạm sau:

1. KIẾN TRÚC & OFFLINE-FIRST:
- 100% Không dùng thư viện ngoài qua CDN (Không jQuery, không Bootstrap, không KaTeX/MathJax, không font ngoài phụ thuộc mạng).
- Monolithic Inlining: Toàn bộ CSS, JS, Audio Synthesizer và dữ liệu câu hỏi được nhúng trực tiếp trong 1 tệp HTML duy nhất (gồm Cổng Master Hub và các file bài học lẻ).
- Tích hợp PWA (manifest.json + sw.js Cache-First) để học sinh cài đặt 1 chạm ra màn hình chính điện thoại và dùng trọn đời ngoại tuyến 100%.

2. GIAO DIỆN & TYPOGRAPHY:
- Thiết kế phong cách Dark Glassmorphism Neon (#070a14 nền tối, viền kính mờ phát quang).
- Bố cục Card trung tâm Zero Wasted Space: Trên PC/Laptop/iPad khống chế chiều cao trong màn hình, KHÔNG BỊ CUỘN TRANG; tự động co giãn 1 cột trên điện thoại xoay dọc.
- Thanh Header 1 hàng duy nhất không rớt dòng: [Tên Giáo Viên có thể sửa ✏️] + [Menu chọn bài] + [Bộ chỉnh cỡ chữ A-/A+] + [Học Bạ LocalStorage] + [Luyện Tập / Thi Thử 10 phút] + [Timer] + [Minimap 1..10].
- Font Stack chuẩn mực chống lỗi font tiếng Việt trên Windows: 'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif. Khai báo bắt buộc: *, button, input, select, textarea { font-family: var(--font-family); }.

3. DỮ LIỆU & NGUYÊN TẮC SƯ PHẠM:
- Mỗi bài học gồm đúng 10 câu hỏi chuẩn 4 định dạng của Bộ GD&ĐT 2025:
  + 6 câu MCQ (Đảo ngẫu nhiên vị trí đáp án bằng Fisher-Yates mỗi lần làm bài).
  + 2 câu Đúng/Sai (Cụm 4 nhận định độc lập a, b, c, d tính điểm bậc thang 0,1 - 0,25 - 0,5 - 1,0).
  + 1 câu Ghép nối tương ứng (Match Pair).
  + 1 câu Điền khuyết từ khóa / giá trị số (Tap to Drop / Word Bank).
- Công thức khoa học & phân số thuần Unicode HTML 100% (Zero Raw LaTeX), phân số dùng color: inherit và border-bottom: 1.6px solid currentColor đồng màu với chữ:
  + Nếu là môn HÓA: Chỉ số dưới <sub> (C₂H₅OH, H₂SO₄), ion <sup> (Fe³⁺, SO₄²⁻), mũi tên (→, ⇌, ↑, ↓).
  + Nếu là môn TOÁN: Vectơ dùng Pure Inline SVG co giãn toàn phần (preserveAspectRatio="none"), căn thức dùng vinculum .sqrt liền khối, phân số .fraction đồng màu.
- Lời giải hiện thẻ đáp án đúng trước, giải thích rõ ràng 3 bước tư duy khoa học.

4. ÂM THANH WEB AUDIO API THỜI GIAN THỰC:
- 100% tự tổng hợp bằng mã nguồn: Click bong bóng (0,05s), Đúng Arpeggio 5 nốt + chuông ngân, Sai trượt nốt nhẹ nhàng, Khải hoàn Fanfare chiến thắng, Chuông bấm Đấu Trường 3 tầng Gameshow (Sub-punch + Laser zap + Metallic gong bell), Khúc ca xuất trận 5,5s nhịp 140 BPM, Khúc ca khải hoàn 5,2s.

5. ĐẤU TRƯỜNG BẤM CHUÔNG KHÔNG DÂY ĐA ĐỊNH DẠNG (MULTI-FORMAT WIRELESS QR BUZZER ARENA):
- Màn hình Sảnh Chờ 2 cột trực quan (Cột chọn bài + Cột hiển thị mã QR kết nối tức thì Zero Idle Time).
- Bàn bấm chuông di động buzzer.html tích hợp đầy đủ 4 định dạng tương tác:
  + Bàn trắc nghiệm MCQ 4 nút lớn A, B, C, D (1 chạm nộp ngay).
  + Bàn Đúng/Sai 4 mệnh đề a, b, c, d với công tắc gạt [🟢 Đ] / [🔴 S] và nút nộp tổng hợp có xem trước kết quả thời gian thực.
  + Bàn ghép nối 4 hàng tương ứng Cột A ghép Cột B với giao diện viên thuốc (Pill buttons).
  + Bàn điền khuyết chế độ kép: Chuyển đổi 1 chạm giữa [✍️ Gõ Chữ & Ngân Hàng Từ Khóa] (hỗ trợ bàn phím ảo, phím Enter gửi bài, ngân hàng từ khóa chạm nhanh chuyên biệt theo môn và từ khóa động theo câu hỏi) và [🔢 Bàn Phím Số Nhanh] (15 phím vật lý: 0..9, ±, ., C, ⌫, 🚀 GỬI).
- Ngân hàng từ khóa tích hợp sẵn cho môn học:
  + Môn Toán: đồng biến, nghịch biến, cực đại, cực tiểu, dương, âm, bằng 0, vô số, vô nghiệm, tiệm cận đứng, tiệm cận ngang, song song, vuông góc, tiếp xúc, π, e, +∞, -∞...
  + Môn Hóa: tỏa nhiệt, thu nhiệt, tăng, giảm, không đổi, chuyển dịch thuận, chuyển dịch nghịch, kết tủa, khí thoát ra, mất màu, axit, bazơ, oxi hóa, khử, este, ancol, liên kết ion, liên kết hiđro...
  + Môn Lí: tăng, giảm, không đổi, cân bằng, hút, đẩy, cùng chiều, ngược chiều, nhiệt lượng, nội năng, công, đẳng nhiệt, đẳng tích, đẳng áp, cảm ứng từ, từ thông...
- Bảng hiển thị trực tiếp Host (Olympia Live Bar): Hiện avatar, tổ, icon định dạng (⚡, ⚖️, 🔗, ✍️, 🔢), nội dung học sinh gửi và thời gian phản hồi mili-giây.
- Động cơ chấm điểm đa định dạng: Tự động so khớp chuỗi chuẩn hóa trim().toLowerCase(), mảng từ đồng nghĩa và so sánh số thực sai số cho phép < 0.01.
- Chuẩn chống tràn Zero-Clipping Guard: Khống chế max-width: 440px, padding: 8px, grid 4 cột, hiển thị trọn vẹn 100% trên mọi điện thoại di động (360px - 480px).
- Cơ chế tự thích ứng số câu hỏi: Khi chọn 1 bài lẻ, tự động chỉ hiện 5 câu và 10 câu (chặn hoàn toàn chọn nhầm 15/20 câu); khi chọn toàn khối mở rộng 5, 10, 15, 20, 30 câu.
- Kết nối truyền thông kép: WebSockets MQTT thời gian thực (< 50ms) kết hợp kênh nội bộ BroadcastChannel.

6. ĐIỀU HƯỚNG BÀN PHÍM CHUẨN MỰC:
- Phím Mũi tên Trái / Phải: Lùi / Tiến câu hỏi (prevQuestion / nextQuestion) có chặn biên an toàn.
- Phím Mũi tên Lên / Xuống: Lùi / Tiến bài học (prevLesson / nextLesson), có hộp thoại xác nhận nếu học sinh đang làm bài thi thử dở dang để tránh mất kết quả thi.
- Tự động vô hiệu hóa phím tắt khi người dùng đang nhập văn bản trong input/textarea/select hoặc đang mở Modal đổi tên giáo viên; kích hoạt e.preventDefault() để chống cuộn trang ngoài ý muốn.

7. MÀN HÌNH MÁY CHIẾU CHUYÊN DỤNG (PROJECTOR PRESENTATION ENGINE):
- Ẩn 100% nội dung thừa của Host: Ẩn .control-toolbar (các nút Tiếp Tục, Khóa Đáp Án, Hộp Quà, Câu Trước, Câu Sau), ẩn .btn-host-admin (Đổi Bài, Xuất Chiếu, Chế Độ Chiếu, Đấu Lại, Online), ẩn .team-controls (+10, +20, -10).
- Tập trung tuyệt đối vào nội dung học tập: Tiêu đề câu hỏi 1.6rem+, đồ thị vector SVG tự động co giãn (240px khi thi đấu, 140px khi hiện đáp án để không cuộn trang), 4 phương án lớn 1.2rem+ với đáp án đúng phát quang xanh ngọc, Bảng Tổng Hợp Vòng Đấu Olympia (+40đ, +30đ, +20đ, +10đ), Khung giải thích bản chất cyan và bảng điểm 4 đội chân trang.
- Sảnh Chờ máy chiếu: Ẩn #setupLeftCol, căn giữa Card Mã QR lớn và Mã Phòng (PHÒNG: ...) trang trọng như sảnh chờ Esports.
- Hỗ trợ 2 chế độ: Mở rộng (Cửa sổ riêng ?role=projector đồng bộ 2 chiều BroadcastChannel/MQTT) và Nhân bản (1 màn hình bật/tắt bằng phím tắt P hoặc nút [👁️ Chế Độ Chiếu (P)], có huy hiệu nổi [⚙️ Hiện Thanh Điều Khiển (Phím P)] để khôi phục tức thời).
```



