<template>
  <div
    v-if="
      this.$route.query['mode'] != 'app' &&
      this.$store.state.globalVariables.showFooter
    "
    class="z-40"
    :class="mobileMenuShow ? 'hidden' : 'footer mt-5 grid grid-cols-12'"
  >
    <div
      class="
        px-5
        sm:px-0
        mt-5
        mb-4
        col-span-12
        sm:col-start-2 sm:col-span-10
        xl:col-start-3 xl:col-span-8
        grid grid-cols-1
        xs:grid-cols-2
        md:grid-cols-4
        lg:grid-cols-5
        text-xs
      "
    >
      <!-- section1 -->

      <div class="hidden lg:block w-3/4">
        <!--logo-->

        <div>
          <mplus :active="true" />
        </div>

        <div class="mt-3 text-xs text-gray-400">
          <p class="mt-3">Цахим ном, Аудио ном, Подкастын цогц платформ юм.</p>
          <p class="mt-3 text-base font-medium text-black">
            илүү УНШ, илүү СОНС
          </p>
        </div>

        <!--app links-->
      </div>

      <!-- section2 -->

      <div class="sm:block w-full xs:w-10/12 xl:w-3/4">
        <h2 class="text-brand font-bold text-base">Бүтээл нийтлэх</h2>

        <!--cards-->

        <a class="hoverBrandLighter" :href="`${$config.authBaseUrl}/publish`">
          <div
            class="
              transition
              duration-300
              mt-3
              p-3
              w-full
              h-14
              2xl:h-12
              bg-brand
              rounded-lg
              flex flex-row
              justify-between
              items-center
              text-white text-xs
              font-medium
            "
          >
            <p>Бүтээл нийтлэх</p>
            <icon-plus />
          </div>
        </a>
        <p class="mt-3 text-xs text-gray-400">
          Таны нийтэлсэн бүтээлийг уншигч, сонсогчдод хил хязгааргүй хүргэнэ
        </p>
      </div>

      <!-- section3 -->

      <div class="mt-9 xs:mt-0 w-full xs:w-10/12 xl:w-3/4">
        <h2 class="text-brand font-bold text-base">Бидний тухай</h2>
        <div
          class="mt-3 text-base font-sm text-gray-700 space-y-1.5 lg:space-y-3"
        >
          <a class="block" href="http://help.mplus.mn/"> Танилцуулга </a>
          <a class="block" href="http://publish.mplus.mn/help/">
            Хамтран ажиллах
          </a>
          <a class="block" href="http://help.mplus.mn/"> Ажлын байр </a>
        </div>
      </div>

      <!-- section4 -->

      <div class="w-full xs:w-10/12 xl:w-3/4 mt-9 md:mt-0">
        <h2 class="text-brand font-bold text-base">Тусламж</h2>
        <div
          class="mt-3 text-base font-sm text-gray-700 space-y-1.5 lg:space-y-3"
        >
          <a class="block" href="http://help.mplus.mn/faq/">
            Түгээмэл асуултууд
          </a>
          <a class="block" href="http://help.mplus.mn/user-guide/">
            Хэрэглэх заавар
          </a>
          <a class="block" href="http://help.mplus.mn/purchase/">
            Худалдан авалт
          </a>
          <a class="block" href="http://help.mplus.mn/payment/card/khanbank/">
            Карт холбох
          </a>
          <a class="block" href="https://assets.mplus.mn/"> Лого татах </a>
        </div>
      </div>

      <!-- section5 -->

      <div id="help" class="mt-9 md:mt-0">
        <h2 class="text-brand font-bold text-base">Холбоо барих</h2>
        <div class="mt-1 text-base font-sm text-gray-700">
          <p>"М нэмэх" ХХК / "Mplus" LLC</p>
          <div class="mt-3">
            <span class="text-xs text-gray-400">Утас:</span>
            <p>8002 6363</p>
          </div>
          <div class="mt-6">
            <span class="text-xs text-gray-400">И-мэйл:</span>
            <a href="mailto:support@mplus.mn">
              <p>support@mplus.mn</p>
            </a>
          </div>

          <div class="mt-6">
            <span class="text-xs text-gray-400">Байршил:</span>
            <p>
              Гурван гол барилга, 6 давхар, Чингисийн өргөн чөлөө-17, Сүхбаатар
              дүүрэг - 14240, 1-р хороо, Улаанбаатар хот, Монгол Улс
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--social links-->

    <div
      class="
        mt-5
        col-span-12
        xl:col-start-3 xl:col-span-8
        px-5
        sm:px-16
        xl:p-0
        grid grid-cols-5
      "
    >
      <div class="col-span-5 lg:col-span-3 2xl:col-span-2 mb-3">
        <p class="text-xs font-light text-gray-400 leading-none">
          Апп татах холбоосууд
        </p>
        <div class="flex flex-row mt-3 justify-start space-x-1 xs:space-x-3">
          <a
            href="https://appgallery.huawei.com/#/app/C103197291"
            target="_blank"
          >
            <store-app-gallery />
          </a>
          <a
            href="https://apps.apple.com/us/app/m/id1289524927"
            target="_blank"
          >
            <store-app-store />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mongolmag&hl=en&gl=US"
            target="_blank"
          >
            <store-google-play />
          </a>
        </div>
      </div>
      <div class="col-span-5 xm:col-span-3 mt-9 lg:mt-0 lg:col-span-2">
        <p class="text-xs font-light text-gray-400 leading-none">
          Биднийг сошиал сувгууд дээр дагаaрай
        </p>

        <div class="flex flex-row mt-3 space-x-3">
          <a href="https://www.facebook.com/mplus.mongolia/" target="_blank">
            <social-facebook />
          </a>
          <a href="https://www.instagram.com/mplusmongolia/" target="_blank">
            <social-instagram />
          </a>
          <a href="https://twitter.com/MongoliaMplus" target="_blank">
            <social-twitter />
          </a>
          <a
            href="https://www.youtube.com/channel/UCoUWMqdxqynzNwiLKE1IXhA"
            target="_blank"
          >
            <social-youtube />
          </a>
        </div>
      </div>
      <div class="col-span-5 xm:col-span-2 lg:col-span-1 mt-9 lg:mt-0">
        <p class="text-xs font-light text-gray-400 leading-none">
          Промо код идэвхжүүлэх
        </p>

        <a
          href="https://buy.mplus.mn/coupon"
          class="
            flex flex-row
            mt-2
            text-white text-sm
            rounded-lg
            items-center
            justify-center
            space-x-2
            bg-brand
            py-2
          "
        >
          <brand-promo :resizeMultiply="1.4" />
          <p>Промо код</p>
        </a>
      </div>
    </div>

    <!-- all rights -->

    <div
      class="
        col-span-12
        xl:col-start-3 xl:col-span-8
        px-8
        sm:px-16
        mt-20
        lg:mt-0
        xl:p-0
        h-28
        text-xs
        flex flex-col
        lg:flex-row lg:justify-between lg:items-center lg:text-center
      "
    >
      <span class="text-gray-400 text-left">
        © 2021 "М нэмэх" ХХК. Бүх эрх хуулиар хамгаалагдсан.
      </span>
      <div
        class="
          mt-3
          pb-6
          sm:pb-0
          lg:mt-0
          flex flex-col
          space-y-3
          sm:flex-row sm:space-x-9 sm:space-y-0
          font-medium
          text-gray-500
        "
      >
        <a href="http://help.mplus.mn/tos/">Үйлчилгээний нөхцөл</a>
        <a href="https://help.mplus.mn/privacy%20new/">Нууцлалын бодлого</a>
      </div>
    </div>
  </div>
</template>

<script>
import StoreAppStore from '../../icons/StoreAppStore.vue'
import StoreAppGallery from '../../icons/StoreAppGallery.vue'
import SocialTwitter from '../../icons/SocialTwitter.vue'
import SocialInstagram from '../../icons/SocialInstagram.vue'
import SocialGoogle from '../../icons/SocialGoogle.vue'
import SocialFacebook from '../../icons/SocialFacebook.vue'
import SocialYoutube from '../../icons/SocialYoutube.vue'
import Mplus from '~/components/logo/Mplus.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import StoreGooglePlay from '~/components/icons/StoreGooglePlay.vue'
import BrandPromo from '~/components/icons/BrandPromo.vue'
import MplusXmas from '../../logo/MplusXmas.vue'

export default {
  components: {
    SocialFacebook,
    SocialGoogle,
    SocialInstagram,
    SocialTwitter,
    StoreAppGallery,
    StoreAppStore,
    Mplus,
    IconPlus,
    SocialYoutube,
    StoreGooglePlay,
    BrandPromo,
    MplusXmas,
  },

  computed: {
    mobileMenuShow() {
      return false
    },
  },
}
</script>
