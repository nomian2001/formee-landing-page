/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: "Thông minh",
    title: "Tính năng thông minh",
    text: "Chức năng dự đoán bán hàng thông minh giúp bạn dự đoán xu hướng kinh doanh tương lai.",
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: "Hiệu suất",
    title: "Hiệu suất nhanh",
    text: "Xử lý dữ liệu nhanh chóng, giúp bạn tiết kiệm thời gian và tập trung vào việc kinh doanh.",
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: "Nội dung",
    title: "Nội dung không giới hạn",
    text: "Lưu trữ và quản lý dữ liệu không giới hạn, từ thông tin khách hàng đến đơn đặt hàng và hóa đơn.",
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: "Tùy chỉnh",
    title: "Tùy chỉnh không giới hạn",
    text: "Tùy chỉnh giao diện và chức năng theo nhu cầu riêng của doanh nghiệp của bạn.",
  },
  {
    id: 5,
    imgSrc: Design,
    altText: "Năng suất",
    title: "Tăng năng suất",
    text: "Cải thiện hiệu suất làm việc của đội ngũ bán hàng với các công cụ quản lý bán hàng tiện lợi.",
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: "Hỗ trợ",
    title: "Hỗ trợ khách hàng",
    text: "Đội ngũ hỗ trợ chuyên nghiệp sẵn lòng giúp đỡ bạn với bất kỳ vấn đề nào.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          // slogan="Quality features"
          title="Các tính năng nổi bật của Formee"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
