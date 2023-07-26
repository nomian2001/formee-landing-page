/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui";
import PriceCard from "components/price-card";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PatternBG from "assets/patternBG.png";

const packages = [
  {
    name: "Gói Miễn Phí",
    description: "Dành cho các đội nhóm hoặc văn phòng nhỏ",
    buttonText: "Đăng Ký Ngay",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Quản lý tối đa 100 đơn hàng mỗi tháng",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Báo cáo doanh thu hàng tháng",
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "Hỗ trợ 24/7",
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: "Đồng bộ với các ứng dụng khác",
        isAvailable: false,
      },
    ],
  },
  {
    header: "Được đề xuất",
    name: "Gói Premium",
    description: "Dành cho doanh nghiệp khởi nghiệp",
    priceWithUnit: "299,000₫/",
    buttonText: "Đăng Ký Ngay",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Quản lý đơn hàng không giới hạn",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Báo cáo doanh thu chi tiết",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Hỗ trợ 24/7",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Đồng bộ với các ứng dụng khác",
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Giá sử dụng Formee"
          // slogan="Chức năng là gì"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: "center",
            flexWrap: ["wrap", null, null, "nowrap"],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 10],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
