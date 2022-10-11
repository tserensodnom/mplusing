<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <!-- top section -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col"
    >
      <div class="bg-tseneg3x pb-10 sm:pb-0 sm:bg-opacity-0 relative lg:mt-20 px-5 sm:px-0">
        <div class="flex flex-col w-10/12 lg:w-5/6 font-medium text-xl">
          <tseneg3x-logo class="w-20 sm:w-max mt-4"></tseneg3x-logo>
          <p class="mt-5 sm:mt-20 font-light text-sm sm:text-base sm:w-2/3 font-merriweather">
            Гадаадад суралцаж, ирээдүйд цойлохоор зорьж буй залуусын хамгийн
            эхний 3 алхам
          </p>
          <p
            class="z-10 mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-merriweather"
          >
            Унш, Суралц, Танилц. <br> Боломжоо нээ
          </p>
          
        </div>
        <div class="flex flex-row flex-wrap xs:flex-nowrap mt-14 xs:space-x-5">
          <a
            class="block w-full xs:w-1/2 text-xs sm:text-base sm:w-60 pt-4 pb-3.5 bg-blueGray-400 rounded-full text-center text-white font-bold"
            
            >Хаагдсан</a
          >
          <!-- <a
            class="mt-3 xs:mt-0 block w-full xs:w-1/2 text-xs sm:text-base sm:w-60 py-3.5 rounded-full text-center bg-white"
            href="https://buy.mplus.mn/coupon"
            >Кодоор идэвхижүүлэх</a
          > -->
          <!-- <img
          src="~/assets/img/tseneg3x/yellowgirl.jpg"
          alt="yellowgirl"
          class="absolute top-14 sm:top-10 md:top-10 lg:-top-16 -right-10 sm:-right-20 md:-right-32 lg:-right-20 xl:-top-10 xl:-right-52 -z-10 w-40 sm:w-72 md:w-96 lg:w-101"
        /> -->
        </div>
        
      </div>
      <tseneg3x-outline-logo
        class="hidden sm:block absolute -left-10 sm:-top-28 md:-top-14 -z-10 sm:w-96 md:w-101 lg:w-120"
      ></tseneg3x-outline-logo>
      <div class="hidden sm:block absolute inset-x-0 h-96 sm:h-100 lg:h-103 xl:h-103 -z-20 bg-tseneg3x">
        <img
          src="~/assets/img/tseneg3x/yellowgirl.jpg"
          alt="yellowgirl"
          class="absolute bottom-0 right-0 sm:-right-20 md:right-10 xl:right-40 2xl:right-60 -z-10 w-60 sm:w-100 lg:w-101"
        />
      </div>
      <div class="text-center text-xl lg:text-4xl mt-16 lg:mt-44 md:mt-32 font-merriweather">
        <p>Бүгд нийлээд: 9’900₮</p>
      </div>
      <div class="w-full flex flex-row flex-wrap lg:flex-nowrap lg:space-x-5 mt-14 text-center">
        <div class="w-full xs:w-1/2 lg:w-1/4 p-3 lg:p-0">
          <a
          href="#read"
          class="h-full w-full flex flex-col bg-white shadow-soft rounded-xl px-2 py-5 items-center justify-between"
          >
          <div class="flex flex-col items-center justify-start">
            <img src="~/assets/img/tseneg3x/mpluspng.png" class="w-28" alt="" />
            <p class="font-merriweather text-2xl font-bold mt-5">Унш</p>
            <p class="text-sm text-blueGray-500 mt-3">
              Гадаадад суралцах, гадаад хэл, ур чадвараа хөгжүүлэх 1+2* ном
              сонгоод, 3 сарын турш уншина
            </p>
          </div>
          <div
            class="flex flex-row text-sm text-blueGray-500 mt-5 font-semibold items-center space-x-5"
          >
            <p>Дэлгэрэнгүй</p>
            <icon-arrow-left
              class="transform rotate-180"
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </div>
        </a>
        </div>
        <div class="w-full xs:w-1/2 lg:w-1/4 p-3 lg:p-0">
        <a
          href="#learn"
          class="h-full w-full flex flex-col bg-white shadow-soft rounded-xl px-2 py-5 items-center justify-between"
        >
          <div class="flex flex-col items-center justify-start">
            <img src="~/assets/img/tseneg3x/tomyo.png" class="w-28" alt="" />
            <p class="font-merriweather text-2xl font-bold mt-5">Суралц</p>
            <p class="text-sm text-blueGray-500 mt-3">
              Худалдан авалт тутамд TomYo World-ийн 7 хоног ашиглах эрх бэлгэнд
              авна.
            </p>
          </div>
          <div
            class="flex flex-row text-sm text-blueGray-500 mt-5 font-semibold items-center space-x-5"
          >
            <p>Дэлгэрэнгүй</p>
            <icon-arrow-left
              class="transform rotate-180"
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </div>
        </a>
        </div>
        <div class="w-full xs:w-1/2 lg:w-1/4 p-3 lg:p-0">
        <a
          href="#meet"
          class="h-full w-full flex flex-col bg-white shadow-soft rounded-xl px-2 py-5 items-center justify-between"
        >
          <div class="flex flex-col items-center justify-start">
            <img
              src="~/assets/img/tseneg3x/tsoilogsoz.png"
              class="w-28"
              alt=""
            />
            <p class="font-merriweather text-2xl font-bold mt-5">Танилц</p>
            <p class="text-sm text-blueGray-500 mt-3">
              ХАМГИЙН АНХНЫ, ХАМГИЙН ТОМ #ZNetworkingConference арга хэмжээнд
              онлайнаар оролцох урилгыг авна.
            </p>
          </div>
          <div
            class="flex flex-row text-sm text-blueGray-500 mt-5 font-semibold items-center space-x-5"
          >
            <p>Дэлгэрэнгүй</p>
            <icon-arrow-left
              class="transform rotate-180"
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </div>
        </a>
        </div>
        <div class="w-full xs:w-1/2 lg:w-1/4 p-3 lg:p-0">
        <a
          href="#opportunity"
          class="h-full w-full flex flex-col bg-white shadow-soft rounded-xl px-2 py-5 items-center justify-between"
        >
          <div class="flex flex-col items-center justify-start">
            <img src="~/assets/img/tseneg3x/unitel.png" class="w-28" alt="" />
            <p class="font-merriweather text-2xl font-bold mt-5">
              Боломжоо нээ
            </p>
            <p class="text-sm text-blueGray-500 mt-3">
              Харин азтай, идэвхитэй 50 хэрэглэгч ZNetworkingConference арга
              хэмжээнд оролцох урилгыг авах болно.
            </p>
          </div>
          <div
            class="flex flex-row text-sm text-blueGray-500 mt-5 font-semibold items-center space-x-5"
          >
            <p>Дэлгэрэнгүй</p>
            <icon-arrow-left
              class="transform rotate-180"
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </div>
        </a>
        </div>
        
      </div>
    </div>

    <!-- empty space -->
    <div class="flex col-span-12 h-28" />
    <div
      class="hidden col-span-6 relative sm:flex flex-col items-end justify-center"
    >
      <img src="~/assets/img/tseneg3x/ieltscover.jpg" class="object-cover rounded-r-2xl md:rounded-2xl h-80 md:h-96 xl:h-103" alt="" />
    </div>

    <div
      id="ielts"
      class="col-span-12 sm:col-start-7 sm:col-span-5 xl:col-span-4 2xl:col-span-3 flex flex-col xm:flex-row justify-start mt-4 relative text-center sm:text-right"
    >
      <div
        class="w-full mt-7 xm:mt-0 flex flex-col items-center sm:items-end px-5 sm:px-0 sm:pl-10 text-sm"
      >
        <img src="~/assets/img/tseneg3x/mpluspng.png" class="w-20" alt="" />
        <p
          class="font-bold text-3xl lg:text-5xl mt-10 font-merriweather"
        >
          IELTS өгөх төлбөрийг нь Mplus-аас даая 
        </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
           Mock Test: 10 эрх <br>
        Computer delivered IELTS: 3 эрх
        </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
          Санамж:
        </p>
        <p class="text-blueGray-400 mt-3">
          <ul class="text-blueGray-400">
            <li>
              - 2021 оны 11-р сарын 12-ны өдөр нийт оролцогчдоос нээлттэйгээр шалгаруулна.
            </li>
            <li>
              - Шалгалтын эрх нь Jet Institute-ийн “Computer Delivered IELTS” болон “IELTS Mock test” байна.
            </li>
            <li>
              - Эрх эзэмшигч нь 2022 оны 12-р сарын 31-ний өдөрт багтаан ашиглана.
            </li>
            <li>
              - Шалгалтын эрхийг дамжуулахгүй, худалдахгүй бөгөөд зөвхөн бүртгэл бүхий эрх эзэмшигч ашиглана.
            </li>
          </ul>
        </p>
    
      </div>
    </div>
    

    <!-- empty space -->
    <div class="col-span-12 h-10 sm:h-28" />
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-5 xl:col-start-3 xl:col-span-4 2xl:col-start-4 2xl:col-span-3 flex flex-col justify-start mt-4 relative"
    >
      <div
        id="read"
        class="w-full mt-7 xm:mt-0 text-center sm:text-left flex flex-col items-center sm:items-start px-5 sm:px-0 sm:pr-10 text-sm"
      >
        <img src="~/assets/img/tseneg3x/mpluspng.png" class="w-20" alt="" />
        <p
          class="font-bold text-3xl lg:text-5xl mt-10 font-merriweather"
        >
          Унш
        </p>
        <p class="mt-3">
          Mplus бол Монголын хамгийн том цахим ном, аудио ном, подкастын сантай гар утасны аппликейшн юм. “3хЦэнэг” хөтөлбөрийн хүрээнд бидний санал болгож буй номуудаас сонголтоо хийн 3 сарын хугацаанд уншиж, өөрт хэрэгтэй туршлага, мэдээллийг хуримтлуулаарай.
        </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
          Багцад ямар номууд байгаа вэ?
        </p>
        <p class="text-blueGray-400 mt-3">
          Гурван номны нэг нь “TomYo: Гадаадад сурах гарц” байна. Үүн дээр нэмээд “Тэд Харвардад хэрхэн тэнцсэн бэ”, “Америкт сурсан тэмдэглэл” зэрэг өөр 2 номыг сонгох боломжтой. 
        </p>
        <div class="mt-10 flex md:flex-row flex-col items-center sm:items-start md:items-center md:space-x-5">
          <a
        @click="showTsenegBooks = true"
        class="block w-40 h-10 rounded-full bg-brand text-white text-xs font-bold text-center py-2.5"
        >Бүх номыг харах</a>
        <a href="https://help.mplus.mn/3x/" target="_blank" class="block text-xs text-brand underline mt-3 md:mt-0">Идэвхижүүлэх заавар</a>
        </div>
      </div>
    </div>
    <div
      class="hidden col-span-6 lg:bg-blueGray-100 rounded-l-3xl relative sm:flex flex-col items-start justify-center"
    >
      <img src="~/assets/img/tseneg3x/bookscover.png" class="w-103" alt="" />
    </div>

    <!-- empty space -->
    <div class="flex col-span-12 h-28" />
    <div
      class="hidden col-span-6 lg:bg-blueGray-100 rounded-r-3xl relative sm:flex flex-col items-end justify-center"
    >
      <img
        src="~/assets/img/tseneg3x/worldcover.png"
        class="w-103 -mr-16"
        alt=""
      />
    </div>
    <div
      id="learn"
      class="col-span-12 sm:col-start-7 sm:col-span-5 xl:col-span-4 2xl:col-span-3 flex flex-col xm:flex-row justify-start mt-4 relative text-center sm:text-right"
    >
      <div
        class="w-full mt-7 xm:mt-0 flex flex-col items-center sm:items-end px-5 sm:px-0 sm:pl-10 text-sm"
      >
        <img src="~/assets/img/tseneg3x/tomyo.png" class="w-20" alt="" />
        <p
          class="font-bold text-3xl lg:text-5xl mt-10 font-merriweather"
        >
          Суралц
        </p>
        <p class="mt-3">
          Монгол оюуныг Дэлхийд хүргэх зорилготой TomYo-ийн тухай сонсоогүй хүн тун ховор биз ээ. “3хЦэнэг”-ийг идэвхжүүлсэн хэрэглэгч бүр TomYo World 7 хоногийн эрхийг бэлгэнд авна.
        </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
          TomYo World-оос юу сурах вэ?
        </p>
        <p class="text-blueGray-400 mt-3">
          5 орны хэлний бүх түвшний хичээл, Их сургууль болон тэтгэлгийн талаарх мэдээллүүд, 250 гаруй менторуудын зөвлөгөө, хэлэлцүүлэг, хоорондоо өрсөлдөж мэдлэгээ тэлэх боломжтой бүх насныханд зориулсан сургалт, ур чадварын хичээлүүд...
        </p>
        <a
        href="https://onelink.to/tomyo"
        target="_blank"
        class="block mt-10 w-40 h-10 place-self-center sm:place-self-end rounded-full bg-brand text-white text-xs font-bold text-center py-2.5"
        >TomYo апп татах</a>
      </div>
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28" />
    <div
      id="meet"
      class="col-span-12 sm:col-start-2 sm:col-span-5 xl:col-start-3 xl:col-span-4 2xl:col-start-4 2xl:col-span-3 flex flex-col xm:flex-row justify-start mt-4 relative"
    >
      <div
        class="w-full mt-7 xm:mt-0 text-center xm:text-left flex flex-col items-center sm:items-start px-5 sm:px-0 sm:pr-10 text-sm"
      >
        <img src="~/assets/img/tseneg3x/tsoilogsoz.png" class="w-20" alt="" />
        <p
          class="font-bold text-3xl lg:text-5xl mt-10 font-merriweather"
        >
          Танилц
        </p>
        <p class="mt-3">
         Залуусын мэдлэг туршлага, мэдрэмжээ хуваалцаж, хамтдаа суралцан зөв бүхнийг бүтээх таатай орчинг бүрдүүлэхээр зорьж буй залуусын зохион байгуулах Z Networking Conference арга хэмжээнд оролцох боломжтой. 
        </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
          Z Networking арга хэмжээ оролцсоноор
        </p>
        <p class="text-blueGray-400 mt-3">
          <ul class="text-blueGray-400">
            <li>
              - Салбартаа тэргүүлэгч эрхмүүдийн туршлагаас хуваалцах
            </li>
            <li>
              - Үе тэнгийн залуустайгаа мэдлэг мэдээлэл солилцох
            </li>
            <li>
              - Танилын хүрээгээ тэлж, сонирхол нэгт хүмүүстэйгээ танилцах
            </li>
            <li>
              - Шинэ үеийн залууст шаардлагатай ур чадвар, хандлага, арга барилыг хамтдаа тодорхойлох зэрэг олон давуу талыг мэдэрнэ гэдгийг бид амлаж байна.
            </li>
          </ul>
        </p>
         <a
        href="https://www.facebook.com/events/208101038040224"
        target="_blank"
        class="block mt-10 w-40 h-10 place-self-center sm:place-self-start rounded-full bg-brand text-white text-xs font-bold text-center py-2.5"
        >Дэлгэрэнгүй</a>
      </div>
    </div>
    <div
      class="hidden col-span-6 lg:bg-blueGray-100 rounded-l-3xl relative sm:flex flex-col items-start overflow-hidden justify-center"
    >
      <img src="~/assets/img/tseneg3x/tsoilogsozcover.jpg" class="object-cover rounded-l-2xl h-80 lg:h-full" alt="" />
    </div>

    <!-- empty space -->
    <div class="flex col-span-12 h-28" />
    <div
      class="hidden col-span-6 relative sm:flex flex-col justify-center overflow-hidden"
    >
      <img
        src="~/assets/img/tseneg3x/unitelcover.jpg"
        class="w-full object-cover rounded-r-3xl"
        alt=""
      />
    </div>
    <div
      id="opportunity"
      class="col-span-12 sm:col-start-7 sm:col-span-5 xl:col-span-4 2xl:col-span-3 flex flex-col xm:flex-row justify-start mt-4 relative text-center sm:text-right"
    >
      <div
        class="w-full mt-7 xm:mt-0 flex flex-col items-center sm:items-end px-5 sm:px-0 sm:pl-10 text-sm"
      >
        <img src="~/assets/img/tseneg3x/unitel.png" class="w-20" alt="" />
        <p
          class="font-bold text-3xl lg:text-5xl mt-10 font-merriweather"
        >
          Боломжоо нээ
        </p>
        <p class="mt-3">
         14-23 насны залууст зориулсан U Хөтөлбөрт тавтай морил. Аль хэдий нь хэрэглэгч болсон эсвэл 2021 оны 11-р сарын 10-наас өмнө амжиж шинэ хэрэглэгч болвол Z Networking Conference арга хэмжээнд хосоороо уригдаж, биечлэн оролцох боломжтой.  </p>
         <p class="mt-3">
           Hey, Чи U хөтөлбөрийн шинэ хэрэглэгч болоод 6 сарын турш 30GB дата + 5000 болон түүнээс дээш цэнэглэлт бүрдээ 5GB-10GB дата бэлгэнд аваарай. Үүнээс гадна зөвхөн чамд зориулсан онлайн хичээлээ хийх эрхтэй E-Meeting багцыг бэлэглэнэ. 
         </p>
        <p
          class="text-blueGray-400 mt-10 text-2xl font-medium font-merriweather"
        >
          U хөтөлбөрт хэрхэн нэгдэх вэ? гэж үү.. 

        </p>
         <p class="text-blueGray-400 mt-3">
          <ul class="text-blueGray-400">
            <li>
              14-23 насны залуучууд өөрийнхөө нэр дээр Юнителийн шинэ дугаар авахад л болно. 
            </li>
            
          </ul>
        </p>
        <p class="mt-10 text-xl font-semibold font-merriweather">
          Welcome U Чиний сонголт!
        </p>
         <a
        href="https://www.unitel.mn/unitel/promotion/597"
        target="_blank"
        class="block mt-10 w-44 h-10 place-self-center sm:place-self-end rounded-full bg-brand text-white text-xs font-bold text-center py-2.5"
        >Шинэ хэрэглэгч болох</a>
      </div>
    </div>
    
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-40" />
    <!-- CTA contact -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center p-5"
    >
      <img src="~/assets/img/tseneg3x/girlsitting.jpg" alt="" class="w-72">

      <a
        id="plans"
       
        class="bg-danger mt-10 text-left plansHover flex flex-col justify-between h-auto w-72 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
      >
        <div class="z-10 w-full flex flex-col p-5">
          <div class="mx-auto flex-grow">
            <tseneg3x-vertical-logo :resizeMultiply="1.6"></tseneg3x-vertical-logo>
          </div>
          <div class="mt-3 text-xs w-full flex flex-row flex-wrap font-bold space-x-3 justify-center items-center">
            <div class="flex flex-row space-x-1 items-center">
              <div class="w-1 h-1 bg-black rounded-full"></div>
              <p>Mplus</p>
            </div>
            <div class="flex flex-row space-x-1 items-center">
              <div class="w-1 h-1 bg-black rounded-full"></div>
              <p>TomYo</p>
            </div>
            <div class="flex flex-row space-x-1 items-center">
              <div class="w-1 h-1 bg-black rounded-full"></div>
              <p>TsoilogsoZ</p>
            </div>
            <div class="flex flex-row space-x-1 items-center">
              <div class="w-1 h-1 bg-black rounded-full"></div>
              <p>U Хөтөлбөр</p>
            </div>
          </div>
          
        </div>
        <div
          class="z-10 w-full bg-blueGray-400 h-16 text-white text-center flex flex-row items-center justify-between px-5"
        >
          <p class="text-lg font-regular flex-grow text-center">
            Хаагдсан
          </p>
          <div class="flex flex-row items-center space-x-2">
            
            <icon-arrow-left class="transform rotate-180" />
          </div>
        </div>
      </a>
  
    </div>
    <!-- unread comments -->
    <div
      class="col-span-12 mt-20 bg-blueGray-100"
    >
      <!-- mobile -->
        <swiper
          class=" py-10"
          :options="{
            slidesPerView: '1',
            centeredSlides: true,
            loop: true,
            autoPlay: { delay: 3500 }
          }"
        >

          <swiper-slide
            class="flex flex-col justify-center items-center space-y-5 px-5 sm:px-10 h-auto font-medium"
          >
            
            <div
              class=" w-full font-medium text-xl text-center flex flex-col justify-center px-5 items-center"
            >
           
              <p class="block max-w-3xl">“Z-family групп дээр бусад үеийн залуустай хэрэгтэй мэдлэг мэдлэгээ хуваалцаж үзсэн. Тэнд үнэхээр хэрэгтэй мэдээллээр дүүрэн,  эерэг уур амьсгалтай байдаг нь маш их таалагдсан. Товчхондоо ЦойлогсоZ нь залуусын хамгийн том, хамгийн эерэг, хамгийн зөв зүйлсийг хуваалцдаг хамгийн таатай суваг юм.”</p>
            </div>
            <div class="flex flex-row items-center space-x-3 ">
              <img
                src="@/assets/img/people/04.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p></p>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex flex-col justify-center items-center space-y-5 px-5 sm:px-10 h-auto font-medium"
          >
            
            <div
              class=" w-full font-medium text-xl text-center flex flex-col justify-center px-5 items-center"
            >
             
              <p class="block max-w-3xl">
                "Би ЦойлогсоZ-г ирээдүйд залуусын хамтдаа хуваалцаж, хамтдаа суралцаж, хамтдаа бүтээдэг хамгийн таатай орчинг бүрдүүлэхээр хичээж буй залуус гэдгийг мэдээд үнэхээр их бахархсан. Цаашдаа ямар ямар гэнэтийн бэлгүүд хүлээж байгааг мэдэхийг тэсэн ядан хүлээж байна."
              </p>
            </div>
            <div class="flex flex-row items-center space-x-3 ">
              <img
                src="@/assets/img/people/05.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p></p>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex flex-col justify-center items-center space-y-5 px-5 sm:px-10 h-auto font-medium"
          >
            
            <div
              class="w-full font-medium text-xl text-center flex flex-col justify-center px-5 items-center"
            >
              
              <p class="block max-w-3xl">
                “Залуу үеийнхэн, өсвөр насныханд боловсрол болон амьдралын чухал сэдвүүдээр контент хүргэж олон залуусд эерэгээр нөлөөлдөг 'ЦойлогсоZ' ийн хамт олонд баярлалаа”
              </p>
              
            </div>
            <div class="flex flex-row items-center space-x-3 ">
              <img
                src="@/assets/img/people/06.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p></p>
            </div>
          </swiper-slide>
        </swiper>
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-40" />
    <div class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 space-y-3 flex flex-col items-center divide-y divide-blueGray-50 px-5 sm:px-0">
      <p class="font-merriweather text-2xl font-bold mb-10">Нийтлэг асуулт хариултууд</p>

      <disclosure-question v-for="(item,index) in faq" :key="index" :question="item.q" :answer="item.a"></disclosure-question>
    </div>
    <div class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6">
      <a
        class="block w-3/5 sm:w-1/2 xl:w-1/4 rounded-full mt-16 py-4 bg-brand mx-auto text-center text-white font-medium"
        href="https://www.facebook.com/mplus.mongolia"
        >Бидэнтэй холбогдох</a
      >
    </div>
    <div
      class="inset-0 z-40 bg-black bg-opacity-0"
      :class="showTsenegBooks ? 'bg-opacity-60 fixed' : 'hidden'"
    ></div>
    <div
      class="fixed overflow-x-hidden transform transition ease-in-out duration-300 inset-0 md:rounded-2xl md:inset-10 xl:inset-x-1/4 mt-10 rounded-t-2xl bg-white shadow-top z-50 flex flex-col"
      :class="showTsenegBooks ? 'translate-y-0' : 'translate-y-beyond'"
    >
      <a
        class="flex flex-row w-full p-2 justify-end"
        @click="showTsenegBooks = false"
      >
        <icon-close styling="w-8 h-8 p-2 bg-gray-100 rounded-full" />
      </a>
      <div class="w-full flex flex-wrap justify-left overflow-scroll mt-4">
        <div class="w-full px-3 flex flex-row font-medium text-lg">
          <p>
            Аудио ном
            <span class="text-brand">{{ tsenegAudioBook.length }}</span>
          </p>
        </div>
        <div
          class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
          v-for="item in tsenegAudioBook"
          :key="item.id"
        >
          <div
            class="rounded shadow-lg overflow-hidden relative w-full"
            style="padding-top: 100%"
            :style="
              'background-color: #' +
              item.book.cover_url.split('_')[parseInt(item.book.cover_url.split('_').length) - 2]
            "
          >
            <img
              :src="item.book.cover_url.replace('/images', '/r_sm_h/images')"
              :alt="item.book.cover_url"
              loading="lazy"
              class="absolute inset-0"
            />
          </div>
        </div>
        <div class="w-full px-3 mt-3 flex flex-row font-medium text-lg">
          <p>
            Цахим ном
            <span class="text-brand">{{ tsenegEBook.length }}</span>
          </p>
        </div>
        <div
          class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
          v-for="item in tsenegEBook"
          :key="item.id"
        >
          <img
            :src="item.book.cover_url.replace('/images', '/r_sm_h/images')"
            :alt="item.book.cover_url"
            loading="lazy"
            class="w-full h-auto rounded shadow-lg"
            :style="
              'background-color: #' +
              item.book.cover_url.split('_')[parseInt(item.book.cover_url.split('_').length) - 2]
            "
          />
        </div>
        <div class="lg:hidden w-full my-4">
          <a
            @click="showTsenegBooks = false"
            
            class="mx-2 sm:mx-20 flex flex-row items-center justify-center rounded-full relative py-4 bg-blueGray-400 text-white font-bold text-xs uppercase"
            >Хаагдсан
            <icon-arrow-left
              class="absolute top-1/3 right-5 transform rotate-180"
          /></a>
        </div>
        <div class="hidden lg:block w-full my-4">
          <a
            @click="showTsenegBooks = false"
            class="mx-2 sm:mx-20 flex flex-row items-center justify-center rounded-full relative py-4 bg-blueGray-400 text-white font-bold text-xs uppercase"
            >Хаагдсан
            <icon-arrow-left
              class="absolute top-1/3 right-5 transform rotate-180"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisclosureQuestion from '../components/feeds/components/DisclosureQuestion.vue'
import Tseneg3xVerticalLogo from '../components/logo/Tseneg3xVerticalLogo.vue'
import Tseneg3xOutlineLogo from '../components/logo/Tseneg3xOutlineLogo.vue'
import Tseneg3xLogo from '../components/logo/Tseneg3xLogo.vue'
import VectorWomanCat from '~/components/illustrations/VectorWomanCat.vue'
import VectorWomanScooter from '~/components/illustrations/VectorWomanScooter.vue'
import VectorWomanReading from '~/components/illustrations/VectorWomanReading.vue'
import VectorWomanQuestion from '~/components/illustrations/VectorWomanQuestion.vue'
import VectorManMplus from '~/components/illustrations/VectorManMplus.vue'
import VectorTseneg from '~/components/illustrations/VectorTseneg.vue'
import VectorOchluur from '~/components/illustrations/VectorOchluur.vue'
import VectorHuchdel from '~/components/illustrations/VectorHuchdel.vue'
import VectorBookStack from '~/components/illustrations/VectorBookStack.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import lottie from 'vue-lottie/src/lottie.vue'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import IconPlus from '~/components/icons/IconPlus.vue'
import ProductSlider from '~/components/feeds/components/ProductSlider.vue'
import BookSingleSlide from '~/components/products/BookSingleSlide.vue'
import VectorGivingGift from '~/components/illustrations/VectorGivingGift.vue'
import VectorPeople from '~/components/illustrations/VectorPeople.vue'
import Invision from '~/components/logo/Invision.vue'
import Amazon from '~/components/logo/Amazon.vue'
import Zapos from '~/components/logo/Zapos.vue'
import Unread from '~/components/logo/Unread.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconArrowLeftBrand from '~/components/icons/IconArrowLeftBrand.vue'
import IconClose from '~/components/icons/IconClose.vue'

Vue.use(VueObserveVisibility)

export default {
  components: {
    VectorWomanCat,
    VectorWomanScooter,
    VectorWomanReading,
    VectorWomanQuestion,
    VectorManMplus,
    VectorTseneg,
    VectorBookStack,
    Swiper,
    SwiperSlide,
    lottie,
    VectorOchluur,
    VectorHuchdel,
    IconPlus,
    ProductSlider,
    BookSingleSlide,
    VectorPeople,
    VectorGivingGift,
    Zapos,
    Amazon,
    Invision,
    IconArrowLeft,
    Unread,
    IconArrowLeftBrand,
    IconClose,
    Tseneg3xLogo,
    Tseneg3xOutlineLogo, Tseneg3xVerticalLogo, DisclosureQuestion
  },
  data() {
    return {
      showTsenegBooks: false,
   
      faq:[
        {
          q: 'Mplus дээр 3 ном авахад л бүгд боломжтой гэсэн үг үү?',
          a: 'Яг зөв. TomYo “Галаадад сурах гарц” ном дээр нэмж хүссэн 2 номоо сонгож идэвхжүүлэхэд бусад бүх боломжууд чамд ирэх болно.',
        },
        {
          q: 'Tomyo World-ийн 7 хоногийн эрхээ хаанаас авах вэ?',
          a: 'Mplus дээр 3 номоо аваад идэвхжүүлснээс хойш 24 цагийн дотор чиний бүртгэлтэй и-мэйл хаягаар Tomyo World идэвхжүүлэх 7 хоногийн эрхийн код илгээгдэнэ.',
        },
        {
          q: 'U хөтөлбөрийн хэрэглэгч арай болж амжаагүй бол яах вэ? ',
          a: 'U хөтөлбөрийн одоогийн хэрэглэгч нар, мөн 10-р сарын 20-ноос өмнө бүртгүүлсэн шинэ хэрэглэгчид #Z Networking conference-д найзтайгаа хамт оролцох 50 зочны тоонд багтах боломжтой. Азтаныг санамсаргүй хэлбэрээр нээлттэй шалгаруулна.',
        },
        {
          q: 'Z Networking арга хэмжээний үеэр юу зохиогдох вэ? Ямар зочид ирэх вэ?',
          a: 'Facebook дээрх Event page дээр дагаад, цаг алдалгүй шинэ мэдээллүүдийг аваарай. ЦойлогсоZ-ийн залуус шилдэг, сонирхолтой арга хэмжээ зохион байгуулна гэдэгт эргэлзэхгүй байна.',
        },
      ],
      allBooks: [
    {
        "id": "131",
        "model_type": "audio_book",
        "model_id": "443",
        "book": {
            "id": "1268",
            "title": "Цагийн менежмент",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/605184ae_84bbd1_0.707.jpg"
        },
        "publisher": {
            "id": "1041",
            "name": "Б. Хулан"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "100",
        "model_type": "ebook",
        "model_id": "616",
        "book": {
            "id": "733",
            "title": "Харвардын оюутнууд хэрхэн суралцдаг вэ?",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publication/covers/52454/5f1557d7_695d07_0.68.jpg"
        },
        "publisher": {
            "id": "110",
            "name": "О. Бат-Эрдэнэ"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "101",
        "model_type": "ebook",
        "model_id": "620",
        "book": {
            "id": "739",
            "title": "Еврей хүмүүсийн боловсрол болон амжилтын нууц",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60518104_aed17f_0.707.jpg"
        },
        "publisher": {
            "id": "110",
            "name": "О. Бат-Эрдэнэ"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "102",
        "model_type": "ebook",
        "model_id": "668",
        "book": {
            "id": "794",
            "title": "Ой тогтоолтын аргаар гадаад үг цээжлэх нь",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publication/covers/52508/5f155862_828489_0.68.jpg"
        },
        "publisher": {
            "id": "138",
            "name": "Х. Хатанбаатар"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "103",
        "model_type": "ebook",
        "model_id": "810",
        "book": {
            "id": "988",
            "title": "ХАРВАРДЫН СЕРЕНДИПИТИ",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publication/covers/52693/5f155a28_6d4f60_0.708.jpg"
        },
        "publisher": {
            "id": "281",
            "name": "Я. Борчулуун"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "104",
        "model_type": "ebook",
        "model_id": "977",
        "book": {
            "id": "1200",
            "title": "Амжилтад хүрдэг хүрдэггүй хүмүүсийн өчүүхэн ялгаа",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publication/covers/52849/5f155bfc_f6612f_0.633.jpg"
        },
        "publisher": {
            "id": "110",
            "name": "О. Бат-Эрдэнэ"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "105",
        "model_type": "ebook",
        "model_id": "997",
        "book": {
            "id": "1222",
            "title": "Зуршлын Хүч",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60518284_cda7ac_0.707.jpg"
        },
        "publisher": {
            "id": "964",
            "name": "Амар-Өргөө ХХК"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "106",
        "model_type": "ebook",
        "model_id": "1003",
        "book": {
            "id": "1228",
            "title": "Америкт суралцсан тэмдэглэл",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publication/covers/54920/5f213a70_504c49_0.683.jpg"
        },
        "publisher": {
            "id": "695",
            "name": "Ц. Оюунгэрэл"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "107",
        "model_type": "ebook",
        "model_id": "1019",
        "book": {
            "id": "1252",
            "title": "Англи хэл сурахад учир бий",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60518484_9f8390_0.707.jpg"
        },
        "publisher": {
            "id": "1020",
            "name": "Э. Мөнхбаатар"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "108",
        "model_type": "ebook",
        "model_id": "1163",
        "book": {
            "id": "1446",
            "title": "Тэд яаж Харвардад тэнцсэн бэ",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/5ffc0950_a9908d_0.667.jpg"
        },
        "publisher": {
            "id": "1293",
            "name": "Өв Орчин Үеийн Боловсролын Хүрээлэн ТББ"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "109",
        "model_type": "ebook",
        "model_id": "1164",
        "book": {
            "id": "1448",
            "title": "Мэргэжлээ сонгохуйн нууц",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/5ffecbd6_656464_0.707.jpg"
        },
        "publisher": {
            "id": "1299",
            "name": "Ц.Рэгзэнбазар"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "110",
        "model_type": "ebook",
        "model_id": "1220",
        "book": {
            "id": "1524",
            "title": "Мэргэжлээ зөв сонгоход тань",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/604ffa11_94a193_0.672.jpg"
        },
        "publisher": {
            "id": "1417",
            "name": "Ч.Чинзориг"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "111",
        "model_type": "ebook",
        "model_id": "1222",
        "book": {
            "id": "1526",
            "title": "Амжилтад хүрэх гал эрмэлзэл",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/604ffb23_c54944_0.707.jpg"
        },
        "publisher": {
            "id": "1417",
            "name": "Ч.Чинзориг"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "112",
        "model_type": "ebook",
        "model_id": "1223",
        "book": {
            "id": "1527",
            "title": "Сурахад суралцах нь",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/604ffb41_8fb2b0_0.688.jpg"
        },
        "publisher": {
            "id": "1417",
            "name": "Ч.Чинзориг"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "113",
        "model_type": "ebook",
        "model_id": "1242",
        "book": {
            "id": "1551",
            "title": "Англи хэл сурах аргачлал",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/606ad73b_599ac1_0.624.jpg"
        },
        "publisher": {
            "id": "1176",
            "name": "П.Гандолгор"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "114",
        "model_type": "ebook",
        "model_id": "1279",
        "book": {
            "id": "1599",
            "title": "Тагтан дээр",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60ac5ffd_5b6889_0.644.jpg"
        },
        "publisher": {
            "id": "1511",
            "name": "Б.Отгонбат"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "115",
        "model_type": "ebook",
        "model_id": "1291",
        "book": {
            "id": "1614",
            "title": "Ирээдүйд үнэтэй мэргэжлүүд",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60bd5ed7_68779f_0.618.jpg"
        },
        "publisher": {
            "id": "181",
            "name": "Н. Энхсайхан"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    },
    {
        "id": "116",
        "model_type": "ebook",
        "model_id": "1329",
        "book": {
            "id": "1664",
            "title": "Гадаадад сурах гарц",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/60ff77c9_ab9468_0.643.jpg"
        },
        "publisher": {
            "id": "1553",
            "name": "“Томё эдтек” ХХК"
        },
        "is_unlocked": false,
        "selection_type": "mandatory"
    },
    {
        "id": "132",
        "model_type": "ebook",
        "model_id": "1032",
        "book": {
            "id": "1268",
            "title": "Цагийн менежмент",
            "cover_url": "https://ub1.cdn.mplus.mn/images/publisher/square/605184ae_84bbd1_0.707.jpg"
        },
        "publisher": {
            "id": "1041",
            "name": "Б. Хулан"
        },
        "is_unlocked": false,
        "selection_type": "normal"
    }
],
    }
  },
  computed:{
    tsenegAudioBook(){
      return this.allBooks.filter((data)=> data.model_type == "audio_book")
    },
    tsenegEBook(){
      return this.allBooks.filter((data)=> data.model_type == "ebook")
    }
  },
  head(){
    return{
      title: '3xЦэнэг үйлчилгээ',
    }
  }

}
</script>

<style></style>
