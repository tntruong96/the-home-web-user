import { getLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

const Human = async () => {
  const locale = await getLocale();
  return (
    <section className="container mx-auto max-w-5xl px-4">
      {locale === "en" ? enVer : viVer}
    </section>
  );
};

export default Human;

const viVer = (
  <div className="pt-32">
    <h1 className="text-2xl font-bold mb-4">Người Nhà</h1>
    <p>
      Mỗi chiếc pizza mang hương vị và dấu ấn của đội ngũ người Nhà nhiệt huyết,
      như chiếc cầu nối đưa bạn đến gần hơn với hành trình pizza đặc sản Việt.
      Nhà rất vui khi có bạn ghé qua, cùng thưởng thức pizza, chia sẻ câu chuyện
      của mình, biết đâu câu chuyện của bạn sẽ truyền cảm hứng để các đầu bếp
      Nhà sáng tạo nên những hương vị mới, ghi dấu thêm cột mốc trên Bản Đồ
      Pizza Đặc Sản Việt.
    </p>
    <p>
      Nếu bạn yêu mến các giá trị của Nhà, hãy cùng nhau làm &quot;người một
      Nhà&quot; nhé!
    </p>
    <div className="flex flex-col md:flex-row gap-8 mt-16">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Câu chuyện Chef Nhà</h1>
        <p>
          Với nhiều năm gắn bó trong thế giới ẩm thực Ý và Âu, Chef Owner của
          Nhà đã dành nhiều năm trải nghiệm hàng trăm hương vị pizza trên khắp
          thế giới. Mỗi quốc gia mang đến một cách kể riêng cho chiếc bánh quen
          thuộc ấy. Nhưng giữa hành trình đó, anh luôn trăn trở: Vì sao Việt Nam
          dù sở hữu kho tàng ẩm thực phong phú từ Bắc vào Nam, nhưng lại chưa có
          một chiếc pizza mang đậm hồn Việt.
        </p>
        <p>
          Từ câu hỏi ấy, giấc mơ đưa nguyên liệu Việt Nam tỏa sáng trên đế bánh
          pizza đã bắt đầu. Một chiếc pizza kết hợp tinh hoa phương Tây với
          nguyên liệu quê hương: từ thịt vịt H&apos;mông đậm đà, tôm Rạch Vẹm
          ngọt thanh, đến những loại rau thơm đặc trưng của mảnh đất hình chữ S
          - mỗi nguyên liệu được chọn lựa, chế biến và hoàn thiện tỉ mỉ, để
          hương vị tự thân tỏa sáng. Giấc mơ ấy được nuôi dưỡng trong căn bếp
          của Nhà, nơi Chef Owner và những người đầu bếp đồng hành cùng nhau,
          chia sẻ tình yêu với hương vị Việt và sự trân trọng dành cho từng
          nguyên liệu.
        </p>
        <p>
          Tại Nhà, mỗi món ăn không chỉ là một trải nghiệm, mà là cách Nhà kể
          câu chuyện hương vị Việt theo một ngôn ngữ mới.Tại Nhà, mỗi món ăn
          không chỉ là một trải nghiệm, mà là cách Nhà kể câu chuyện hương vị
          Việt theo một ngôn ngữ mới.
        </p>
      </div>
      <div className="flex-1 relative  min-h-[500px] md:min-h-[400px]">
        <Image alt="human" src={"/human.webp"} fill className="object-cover" />
      </div>
    </div>
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-16">
      <div className="flex-1 relative  min-h-[500px] md:min-h-[400px]">
        <Image
          alt="human"
          src={"/human-1.webp"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Câu chuyện Người Nhà</h1>
        <p>
          Nhà tin rằng sự kết nối chân thành bắt đầu từ những điều nhỏ bé: từ
          một lời chào, một sự để ý tinh tế, hay cảm giác được chăm sóc tận tâm.
          Người Nhà mang theo sự tử tế vào từng khoảnh khắc nhỏ, để mỗi lần ghé
          Nhà, bạn không chỉ tìm một bữa ăn, mà là trở về một chốn thân thuộc.
        </p>
        <p>
          Tinh thần sáng tạo của Nhà không chỉ nằm trong căn bếp, mà còn hiện
          diện trong cách phục vụ. Từ cảm hứng ẩm thực Việt trải dài khắp Bắc -
          Trung - Nam - Phú Quốc, Người Nhà luôn sẵn sàng kể cho bạn nghe câu
          chuyện đằng sau từng món ăn, từng nguyên liệu để bạn cảm thấy gần gũi
          hơn với hương vị Việt trên đế bánh pizza Ý truyền thống.
        </p>
        <p>
          Ở Nhà, mọi thứ được chăm chút vừa đủ để bạn có thể thoải mái ngồi
          xuống, thưởng thức bữa ăn, và trò chuyện tự nhiên như ở nhà.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 my-16 bg-[url(/human-2.webp)] bg-center text-white px-8 py-8 md:py-0">
      <div className="flex-1/3 md:pt-24">
        <h1 className="text-xl font-bold md:text-center">Kết nối</h1>
        <p>
          Nhà mong muốn xây dựng sự kết nối chân thành giữa The Home Pizza và
          khách hàng, dựa trên giá trị tử tế của chính những người Nhà - những
          cộng sự đồng hành. Từ đó lan toả tinh thần/giá trị Home đến từng nhân
          sự, để mỗi khách hàng đều có thể cảm nhận được.
        </p>
      </div>
      <div className="flex-1/3 md:pt-16">
        <h1 className="text-xl font-bold md:text-center">Sáng tạo</h1>
        <p>
          Dựa trên giá trị tinh hoa ẩm thực Việt trải dài từ Bắc vào Nam và cảm
          hứng từ nghệ thuật làm pizza Ý truyền thống, Nhà không ngừng tìm tòi
          và đổi mới trong từng công thức để mỗi chiếc pizza là sự hòa quyện
          tinh tế giữa đặc sản Việt Nam và nền tảng pizza cổ điển, mang đến một
          trải nghiệm vị giác độc đáo, đậm đà bản sắc và đầy tự hào.
        </p>
      </div>
      <div className="flex-1/3  md:pt-24">
        <h1 className="text-xl font-bold md:text-center">Tận tâm</h1>
        <p>
          Đặt khách hàng ở vị trí trung tâm, chúng tôi không ngừng nỗ lực mang
          đến những trải nghiệm “Nhà” trọn vẹn nhất - từ món ăn đến dịch vụ.
        </p>
      </div>
    </div>
  </div>
);

const enVer = (
  <div className="pt-32">
    <h1 className="text-2xl font-bold mb-4">Humans of The Home</h1>
    <p>
      Each pizza carries the flavors and personal touch of the passionate Home
      team - a small bridge that brings you closer to the journey of Vietnamese
      Specialty Pizza. We&apos;re always happy to welcome you, to share a slice,
      exchange stories, and who knows, your story might just inspire our chefs
      to create new flavors, adding another milestone to the Vietnamese
      Specialty Pizza map.
    </p>
    <p>
      If you love our values that we stand for, we&apos;d love you to become
      part of the Home.
    </p>
    <div className="flex flex-col md:flex-row gap-8 mt-16">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Home-chef&apos;s Story </h1>
        <p>
          With many years immersed in Italian and European cuisine, our Chef
          Owner has spent his journey tasting hundreds of pizzas around the
          world. In every country, the familiar pizza tells a different story,
          shaped by local culture and ingredients. Yet throughout that journey,
          one question stayed with him: Why hasn&apos;t Vietnam, with its rich
          culinary heritage from North to South, had a pizza that truly carries
          the Vietnamese soul?
        </p>
        <p>
          From that question, the dream of placing Vietnamese ingredients shine
          on a pizza base began. A pizza that brings together Western
          craftsmanship and flavors of homeland - from the bold richness of
          H&apos;mong duck, the natural sweetness of Rach Vem shrimp, to
          aromatic herbs unique to the lands of Vietnam. Each ingredient is
          carefully selected, prepared, and finished with intention, allowing
          its true character to come through.
        </p>
        <p>
          That dream is nurtured every day in The Home&apos;s kitchen, where the
          Chef Owner and the team of chefs work side by side, united by a shared
          love for Vietnamese flavors and deep respect for each ingredient.
        </p>
        <p>
          At The Home Pizza, every dish that comes out of the kitchen is more
          than an experience, it is how we tell the story of Vietnamese flavors
          in a new culinary language.
        </p>
      </div>
      <div className="flex-1 relative  min-h-[500px] md:min-h-[400px]">
        <Image alt="human" src={"/human.webp"} fill className="object-cover" />
      </div>
    </div>
    <div className="flex flex-col-reverse md:flex-row gap-8 mt-16">
      <div className="flex-1 relative  min-h-[500px] md:min-h-[400px]">
        <Image
          alt="human"
          src={"/human-1.webp"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Home-staff&apos;s Story</h1>
        <p>
          At The Home Pizza, we believe genuine connection begins with the
          smallest things - a warm greeting, a thoughtful gesture, or the simple
          feeling of being well cared for. Our people carry this sense of
          kindness into every moment, so that each visit feels less like dining
          out and more like coming home.
        </p>
        <p>
          Our spirit of creativity lives not only in the kitchen, but also in
          the way we serve. Inspired by Vietnamese cuisine from North to South -
          and from the mainland to Phu Quoc - our team is always happy to share
          the stories behind each dish and ingredient, helping you feel closer
          to Vietnamese flavors reimagined on a classic Italian pizza base.
        </p>
        <p>
          At The Home Pizza, everything is prepared with just enough care and
          attention, so you can sit back, enjoy your meal, and share
          conversations - naturally, just like at home.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-4 my-16 bg-[url(/human-2.webp)] bg-center text-white px-8 py-8 md:py-0">
      <div className="flex-1/3 md:pt-24">
        <h1 className="text-xl font-bold md:text-center">Connection</h1>
        <p>
          At The Home Pizza, we strive to build sincere connections with our
          guests, rooted in the kindness of our people - the companions who grow
          with Nhà every day. This spirit of Home is shared across the team, so
          every guest can genuinely feel it in each visit.
        </p>
      </div>
      <div className="flex-1/3 md:pt-16">
        <h1 className="text-xl font-bold md:text-center">Creativity</h1>
        <p>
          Inspired by the richness of Vietnamese cuisine from North to South and
          guided by traditional Italian pizza-making, we continuously explores
          and refines each recipe. Every pizza becomes a thoughtful harmony
          between Vietnamese specialties and classic pizza foundations -
          distinctive, full of character, and proudly Vietnamese.
        </p>
      </div>
      <div className="flex-1/3  md:pt-24">
        <h1 className="text-xl font-bold md:text-center">Dedication</h1>
        <p>
          With guests always at the heart of everything we do, we are committed
          to creating the most complete “Home” experience - thoughtfully
          crafted, from the food on the table to the way you&apos;re cared for.
        </p>
      </div>
    </div>
  </div>
);
