/**
 * Chỉnh toàn bộ nội dung món quà tại đây trước khi deploy.
 * Không cần sửa component để đổi tên hoặc lời nhắn.
 */
export const siteConfig = {
  senderName: "", // Tên của bạn, ví dụ: Minh
  recipientName: "", // Tên cô ấy; để trống sẽ hiện "cậu"

  letter: {
    kicker: "MỘT LÁ THƯ NHỎ GỬI CẬU",
    title: "Có vài điều tớ muốn nói...",
    greeting: "Gửi cậu,",
    paragraphs: [
      "Tớ đã nghĩ khá lâu mới quyết định viết những dòng này. Có lẽ nói trực tiếp sẽ khiến tớ hơi ngại, nên tớ muốn bắt đầu bằng một lá thư nhỏ.",
      "Tớ thấy vui mỗi khi được trò chuyện với cậu. Càng biết thêm về cậu, tớ càng muốn được tìm hiểu cậu nhiều hơn — chậm rãi, chân thành và không cần phải vội vàng.",
      "Tớ không muốn làm cậu khó xử hay cảm thấy phải trả lời theo điều tớ mong đợi. Tớ chỉ muốn thành thật với cảm xúc của mình, và hy vọng lá thư nhỏ này có thể khiến cậu mỉm cười một chút.",
    ],
    signOff: "Từ một người đang quý cậu,",
  },

  question: {
    eyebrow: "TỚ MUỐN HỎI CẬU MỘT ĐIỀU",
    title: "Cậu đồng ý làm người yêu tớ nha?",
    subtitle: "Cậu cứ chọn điều mà trái tim cậu thật sự muốn nhé.",
    yes: "Đồng ý làm người yêu tớ ♡",
    no: "Không",
    yesTitle: "Tớ vui lắm! ♡",
    yesMessage: "Cảm ơn cậu đã cho tớ cơ hội. Mình cứ cùng nhau tìm hiểu, quan tâm và trân trọng nhau từ những điều nhỏ nhất nhé.",
    noTitle: "Tớ hiểu mà.",
    noMessage: "Cảm ơn cậu đã thành thật với tớ. Tớ tôn trọng cảm xúc và quyết định của cậu. Mong cậu luôn vui vẻ và gặp thật nhiều điều tốt đẹp nhé.",
    closing: "Cảm ơn cậu đã dành thời gian đọc món quà nhỏ này.",
  },

  gifs: {
    wave: "/gifs/bear-wave.gif",
    heart: "/gifs/bear-heart.gif",
    flower: "/gifs/bear-flower.gif",
    shy: "/gifs/bear-shy.gif",
    hug: "/gifs/bear-hug.gif",
  },
} as const;

export type TeddyMood = keyof typeof siteConfig.gifs;
