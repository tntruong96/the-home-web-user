import { getLocale } from "next-intl/server";
import React from "react";

const LocationStory = async () => {
  const locale = await getLocale();
  return <div className="pt-28">{locale === "en" ? enVer : vnVer}</div>;
};

export default LocationStory;

const vnVer = (
  <>
    <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
      The Home Pizza Signature Phú Quốc
    </h2>
    <p>
      Năm 2019, Nhà hàng The Home Pizza đầu tiên được ra đời tại Phú Quốc, mang
      theo tầm nhìn lan tỏa văn hóa ẩm thực phương Tây trên tinh thần ẩm thực
      đặc sản Việt Nam. Sau 5 năm, hành trình ấy được tiếp tục trong diện mạo
      mới. Với cảm hứng xuất phát từ ý niệm &quot;về nhà&quot; , năm 2024, The
      Home Pizza Signature ra đời mang theo mục tiêu tái hiện không gian ẩm thực
      dưới mái nhà ba gian truyền thống, thông qua ngôn ngữ thiết kế hiện đại và
      cảm giác &quot;tự nhiên như ở nhà&quot; .
    </p>
    <p>
      Từ tinh thần đó, bức tường gạch đỏ thô mộc làm nổi bật lên căn bếp mở ở
      gian trước, đón thực khách bằng những nụ cười của các đầu bếp Nhà ngay khi
      đặt chân đến. Trước sân nhà là khu vườn mát lành, nơi tán cau vươn cao đón
      nắng, bụi tre rì rào trong gió mát và cây khế dân dã. Người Việt xưa nay
      trồng cây cau trước nhà như một lời chào hiếu khách, trồng cây khế để giữ
      lại vị ngọt dân dã của vườn nhà, và để bụi tre rì rào bên hiên như biểu
      tượng cho sự che chở, bền bỉ qua năm tháng. Nhà không quên mang những dáng
      cây ấy vào khu vườn của mình, để bạn Nhà chạm vào cảm giác thân thuộc một
      cách vẹn tròn nhất.
    </p>
    <p>
      Cùng với đó là các loại thảo mộc do người Nhà tự tay chăm sóc, để hương
      thơm nhẹ nhàng lan tỏa, tạo nên một khoảng không gian thư thả cho bạn Nhà
      thưởng thức Pizza Đặc Sản Việt cùng người thương.
    </p>
    <p>
      Nổi bật trong lối sống cộng đồng của người Việt Nam là sự chú trọng không
      gian chung. Vậy nên Nhà dành trọn khoảng sân trước làm nơi bạn Nhà tụ họp
      đông đủ, cho những bữa ăn bên gia đình thêm đong đầy.
    </p>
    <p>
      Khi bước vào gian nhà chính, không gian ẩm thực ấm cúng cùng quầy bar hiện
      đại mở ra, với ánh đèn vàng vừa đủ. Gian nhà chính được điểm xuyết những
      chi tiết mây đan mộc mạc, vừa đủ thân quen, vừa đủ hiện đại để bạn Nhà cảm
      nhận tinh thần Đặc Sản Việt trọn vẹn hơn.
    </p>
    <p>
      Dưới bóng cây râm mát, hay trong không gian ấm cúng, là chiếc Pizza Đặc
      Sản Việt còn ấm nóng, là gian bếp đỏ lửa, là người Nhà đón bạn bằng nụ
      cười thân quen. Tất cả được chuẩn bị gọn gàng, chỉn chu, để bạn có thể
      ngồi xuống thật tự nhiên và thấy mình đang ở Nhà.
    </p>
    <p>
      Giữa trung tâm đảo ngọc nhộn nhịp, The Home Pizza Signature đón bạn
      &quot;về nhà&quot; trong không gian thân thuộc và ấm cúng. Cứ tự nhiên như
      ở Nhà!
    </p>
  </>
);

const enVer = (
  <>
    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
      The Home Pizza Signature Phú Quốc
    </h2>
    <p>
      In 2019, the first The Home Pizza restaurant was born in Phú Quốc,
      carrying a vision to share Italian culinary culture through the spirit of
      Vietnamese local flavors. Five years later, that journey continues in a
      new form. Inspired by the idea of &quot;coming home&quot;, The Home Pizza
      Signature was introduced in 2024 with the aim of recreating the atmosphere
      of a traditional three-compartment Vietnamese house - interpreted through
      modern design and a feeling that&apos;s natural, just like being at home.
    </p>
    <p>
      From this spirit, a raw brick wall highlights the open kitchen at the
      front of the house, welcoming guests with warm smiles from the Home chefs
      the moment they arrive. Beyond the entrance lies a breezy garden, where
      tall areca palms catch the sunlight, bamboo rustles gently in the wind,
      and a humble starfruit tree stands quietly. For generations, Vietnamese
      families have planted areca palms as a gesture of hospitality, starfruit
      trees to preserve the garden’s simple sweetness, and bamboo as a symbol of
      shelter and resilience through time. At The Home, these familiar
      silhouettes are thoughtfully brought into the garden, allowing guests to
      reconnect with a deep sense of belonging.
    </p>
    <p>
      Adding to the experience are herbs lovingly grown by the Home team, their
      gentle aromas drifting through the space and creating a calm setting for
      guests to enjoy Vietnamese Specialty Pizzas with their loved ones.
    </p>
    <p>
      As share space is important to Vietnamese communal life, The Home
      dedicates the entire front courtyard as a gathering place where families
      and friends come together, with meals feel fuller and more meaningful.
    </p>
    <p>
      Stepping into the main house, guests are greeted by a warm dining space
      and a modern bar, softly lit with golden light. The interior is accented
      with handcrafted rattan details - familiar yet contemporary - allowing the
      spirit of Vietnamese specialties to be felt more completely.
    </p>
    <p>
      Whether under the shade of trees or within the cozy interiors, there is
      always a freshly baked Vietnamese Specialty Pizza, a glowing kitchen, and
      familiar faces welcoming you with a smile. Everything is carefully
      prepared so you can sit down effortlessly and feel that you are home.
    </p>
    <p>
      In the vibrant heart of Pearl Island, The Home Pizza Signature welcomes
      you back home to a space that feels warm, familiar, and comforting. Make
      yourself at home.
    </p>
  </>
);
