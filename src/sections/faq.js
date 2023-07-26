/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";

const faqs = [
  {
    title: "Formee có tính phí để sử dụng không?",
    contents: (
      <div>
        Formee cung cấp cả phiên bản miễn phí và phiên bản trả phí. Phiên bản
        miễn phí bao gồm các tính năng cơ bản, còn phiên bản trả phí sẽ mở rộng
        các tính năng và hỗ trợ sâu hơn.
      </div>
    ),
  },
  {
    title: "Formee có hỗ trợ đa ngôn ngữ không?",
    contents: (
      <div>
        Đúng, Formee hỗ trợ nhiều ngôn ngữ khác nhau bao gồm cả Tiếng Việt. Bạn
        có thể thay đổi ngôn ngữ trong phần thiết lập của ứng dụng.
      </div>
    ),
  },
  {
    title: "Tôi có thể tùy chỉnh giao diện của Formee theo ý muốn không?",
    contents: (
      <div>
        Chúng tôi hiểu rằng mỗi người dùng có những yêu cầu riêng, vì vậy Formee
        cho phép bạn tùy chỉnh giao diện để phù hợp với nhu cầu của mình.
      </div>
    ),
  },
  {
    title: "Formee có thể đồng bộ với các phần mềm quản lý khác không?",
    contents: (
      <div>
        Formee có khả năng tương thích cao với nhiều hệ thống khác nhau. Nếu bạn
        cần tính năng đồng bộ hóa với một phần mềm cụ thể, vui lòng liên hệ với
        bộ phận hỗ trợ của chúng tôi để nhận thêm thông tin.
      </div>
    ),
  },
  {
    title: "Formee có hỗ trợ ứng dụng di động không?",
    contents: (
      <div>
        Chúng tôi cung cấp ứng dụng di động cho cả iOS và Android, giúp bạn quản
        lý kinh doanh mọi lúc, mọi nơi.
      </div>
    ),
  },
];

export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader title="Câu hỏi thường gặp" slogan="" />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
