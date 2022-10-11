<template>
  <div
    v-if="this.$route.query['mode'] != 'app'"
    class="w-full mx-auto bg-white"
  >
    <div
      v-if="adShow"
      class="
        absolute
        inset-0
        bg-black bg-opacity-50
        z-50
        flex
        items-center
        justify-center
      "
    >
      <div class="h-1/2 sm:h-2/3 relative cursor-pointer"
        @click="closeAdRedirect">
        <img
          src="~/assets/img/plusbox.png"
          class="object-contain h-full"
        />
      </div>
      <div
        @click="closeAd"
        class="
          cursor-pointer
          absolute
          right-3
          top-3
          p-5
          rounded-full
          bg-white
          shadow-md
        "
      >
        <icon-close styling="w-3" color="#000"></icon-close>
      </div>
    </div>
    <nav
      class="h-20 sm:h-16 shadow-lg content-center grid grid-cols-12 bg-white"
    >
      <div
        class="
          logo
          flex
          self-center
          col-span-2
          sm:col-start-2 sm:col-span-1
          xl:col-start-3
          m-auto
          sm:m-0
        "
      >
        <div class="ml-4 xs:ml-5 sm:ml-0">
          <mplus :active="true" />
        </div>
      </div>
      <app-header-menu></app-header-menu>

      <div class="hidden xl:flex col-start-9 col-end-11">
        <search-bar :mobile="false" />
      </div>

      <div
        class="
          hidden
          sm:flex
          text-xs
          lg:text-sm
          font-medium
          col-start-11 col-span-2
          flex-row
          items-center
          justify-end
          pr-10
          space-x-3
        "
      >
        <div v-if="$store.state.auth.loggedIn" class="relative z-20">
          <div class="flex flex-row space-x-3 items-center">
            <!-- <p class="hidden xl:block text-xs">
              {{ $store.state.auth.user.name }}
            </p> -->
            <click-outside>
              <template v-slot:toggle>
                <notif-bell class="text-blueGray-400"></notif-bell>
              </template>

              <template v-slot:panel>
                <div
                  class="
                    shadow-md
                    bg-white
                    rounded-md
                    border border-blueGray-100
                    flex flex-col
                    w-80
                  "
                >
                  <!-- notifications -->
                  <div
                    class="
                      flex flex-row
                      px-5
                      py-3
                      justify-between
                      items-center
                      border-b border-blueGray-100
                    "
                  >
                    <p>Мэдэгдэл</p>
                    <a
                      @click="markAsSeen(null, null, 'all')"
                      class="
                        cursor-pointer
                        flex flex-row
                        items-center
                        space-x-1
                        text-blueGray-400
                        hover:underline
                        rounded-lg
                      "
                    >
                      <icon-check-all :resizeMultiply="0.6"></icon-check-all>
                      <p class="text-xs font-light">Бүгдийг уншсан болгох</p>
                    </a>
                  </div>

                  <div
                    v-if="notifs.data && notifs.data.length"
                    class="
                      flex flex-col
                      p-2
                      space-y-2
                      h-96
                      cursor-pointer
                      max-h-6xl
                      overflow-scroll
                    "
                  >
                    <!-- items -->

                    <div
                      @mouseenter="
                        () => {
                          if (item.userEventStatus == 'unseen') {
                            markAsSeen(item.id, 'seen', 'single')
                          }
                        }
                      "
                      v-for="item in notifs.data"
                      :key="item.id"
                      class="
                        flex flex-row
                        space-x-3
                        items-start
                        transition
                        duration-300
                        rounded-lg
                        p-3
                        relative
                      "
                      :class="{
                        'bg-blueGray-50': item.userEventStatus == 'unseen',
                      }"
                    >
                      <div
                        v-if="item.userEventStatus == 'unseen'"
                        class="
                          bg-red-400
                          absolute
                          rounded-full
                          h-3
                          w-3
                          top-0
                          left-0
                        "
                      ></div>
                      <div
                        class="
                          w-10
                          h-10
                          rounded-md
                          bg-blueGray-100
                          flex-shrink-0 flex
                          items-center
                          justify-center
                        "
                      >
                        <img
                          :src="item.image_url"
                          class="h-full w-auto rounded-md"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col space-y-1">
                        <p class="text-xs line-clamp-2">{{ item.title }}</p>
                        <p
                          class="
                            text-xs
                            font-light
                            text-blueGray-400
                            line-clamp-3
                          "
                        >
                          {{ item.body }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    v-else
                    class="
                      flex
                      items-center
                      justify-center
                      text-xs
                      font-regular
                      text-blueGray-400
                      py-5
                    "
                  >
                    Танд шинэ мэдэгдэл ирээгүй байна
                  </div>
                  <hr class="border-blueGray-100" />
                  <NuxtLink
                    to="/account/notifications"
                    class="
                      w-full
                      px-5
                      py-3
                      flex flex-row
                      items-center
                      space-x-1
                      text-xs text-brand
                    "
                  >
                    <p>Бүх мэдэгдлийг харах</p>
                    <icon-arrow-right-long></icon-arrow-right-long>
                  </NuxtLink>
                </div>
              </template>
            </click-outside>
            <NuxtLink to="/account">
              <img
                :src="$store.state.auth.user.cover_url"
                size="xs"
                class="w-8 h-8 rounded-lg"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          v-else
          class="
            w-full
            sm:flex
            flex-row
            justify-end
            space-x-2
            hidden
            text-brand-dark
          "
        >
          <a
            @click="userLogin()"
            class="w-max auth h-full px-5 flex items-center"
          >
            <p class="">Нэвтрэх</p>
          </a>
        </div>
      </div>

      <div class="flex col-span-2 mx-auto self-center sm:hidden">
        <button @click="toggleMobileMenu()">
          <icon-close v-if="mobileMenuShow" styling="w-5 xs:w-6" />
          <div v-else class="relative">
            <icon-burger></icon-burger>
            <div
              v-if="
                $store.state.notifications.notifs.data &&
                $store.state.notifications.notifs.data.length &&
                $store.state.notifications.notifs.data.filter(
                  (i) => i.userEventStatus == 'unseen'
                ).length
              "
              class="
                absolute
                -top-1
                -left-1
                flex
                items-center
                justify-center
                bg-red-400
                rounded-full
                w-4
                h-4
                text-xs text-white
              "
            >
              {{
                $store.state.notifications.notifs.data.filter(
                  (i) => i.userEventStatus == 'unseen'
                ).length
              }}
            </div>
          </div>
        </button>

        <!-- <button
          @click="toggleMobileMenu()"
          class="flex items-center justify-center text-center"
        >
          <img
            v-if="!mobileMenuShow && $store.state.auth.loggedIn"
            :src="$store.state.auth.user.cover_url"
            size="xs"
            class="w-8 h-8 rounded-lg"
          />
          <p
            v-else-if="!mobileMenuShow && !$store.state.auth.loggedIn"
            class="text-brand text-xs"
          >
            Нэвтрэх
          </p>
        </button> -->
      </div>
    </nav>

    <div
      v-if="!this.$route.path.includes('/account')"
      class="
        h-12
        w-full
        bg-blueGray-100
        text-xs
        font-medium
        xl:hidden
        flex
        item-center
      "
    >
      <search-bar :mobile="true" />
    </div>

    <div :class="mobileMenuShow ? 'mobile-menu p-5 sm:hidden' : 'hidden'">
      <div>
        <div
          v-if="$store.state.auth.loggedIn"
          class="relative flex justify-between items-center"
        >
          <div class="flex flex-row space-x-3 items-center font-semibold">
            <img
              :src="$store.state.auth.user.cover_url"
              size="xs"
              class="w-8 h-8 rounded"
            />
            <p>{{ $store.state.auth.user.name }}</p>
          </div>

          <user-menu isMobile="true" />
        </div>

        <div
          v-else
          class="
            flex flex-row
            place-content-center
            space-x-3
            text-sm
            justify-between
          "
        >
          <a @click="userLogin()" class="h-10 w-6/12">
            <div
              class="
                bg-brand
                text-white
                rounded
                h-full
                w-full
                text-center
                flex flex-col
                justify-center
              "
            >
              Нэвтрэх
            </div>
          </a>

          <a :href="`${$config.apiUrl}/register`" class="h-10 w-6/12">
            <div
              class="
                bg-gray-200
                text-gray-900
                rounded
                h-full
                w-full
                text-center
                flex flex-col
                justify-center
              "
            >
              Бүртгүүлэх
            </div>
          </a>
        </div>
      </div>

      <hr class="my-5" />

      <div>
        <span class="text-xs text-gray-400">Үндсэн цэс</span>
        <div class="mt-3 font-medium text-gray-900 space-y-3">
          <NuxtLink class="block" to="/book"> Ном </NuxtLink>
          <NuxtLink class="block" to="/audio"> Аудио ном </NuxtLink>
          <NuxtLink class="block" to="/podcast"> Подкаст </NuxtLink>
          <NuxtLink class="block" to="/tseneg"> Цэнэг </NuxtLink>
          <NuxtLink class="block" to="/rent"> Түрээс </NuxtLink>
          <NuxtLink class="flex flex-row" to="/account/notifications">
            <notif-bell></notif-bell> Мэдэгдлүүд
          </NuxtLink>
        </div>
      </div>

      <hr class="my-5" />

      <div>
        <span class="text-xs text-gray-400">Апп татах холбоос</span>
        <div class="flex flex-row mt-3 justify-start space-x-1 xs:space-x-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.mongolmag&hl=en&gl=US"
            target="_blank"
          >
            <store-google-play />
          </a>
          <a
            href="https://apps.apple.com/us/app/m/id1289524927"
            target="_blank"
          >
            <store-app-store />
          </a>
          <a
            href="https://appgallery.huawei.com/#/app/C103197291"
            target="_blank"
          >
            <store-app-gallery />
          </a>
        </div>
      </div>

      <hr class="my-5" />
      <div class="font-medium text-gray-900 space-y-3">
        <a class="block" target="_blank" href="http://help.mplus.mn/">
          Тусламж
        </a>
        <a
          class="block"
          target="_blank"
          href="http://help.mplus.mn/user-guide/"
        >
          Хэрэглэх заавар
        </a>
        <a class="block" target="_blank" href="http://help.mplus.mn/">
          Бидний тухай
        </a>
        <a class="block" target="_blank" href="http://help.mplus.mn/tos/">
          Үйлчилгээний нөхцөл
        </a>
        <a class="block" target="_blank" href="http://help.mplus.mn/privacy/">
          Нууцлалын бодлого
        </a>
      </div>

      <hr class="my-5" />

      <div class="space-y-3">
        <span class="text-xs text-gray-400">Холбоо барих</span>
        <div class="font-medium text-gray-900 space-y-3">
          <a class="block" href=""> (+976) 8002 6363 </a>
          <a class="block" href=""> support@mplus.mn </a>
        </div>

        <div class="flex flex-row mt-3 space-x-3">
          <a target="_blank" href="https://twitter.com/MongoliaMplus">
            <social-twitter />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCoUWMqdxqynzNwiLKE1IXhA"
          >
            <social-youtube />
          </a>
          <a target="_blank" href="https://www.instagram.com/mplusmongolia/">
            <social-instagram />
          </a>
          <a target="_blank" href="https://www.facebook.com/mplus.mongolia/">
            <social-facebook />
          </a>
        </div>

        <p class="text-xs text-gray-400 text-left">
          © 2020 Эм нэмэх ХХК. <br />
          Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderMenu from './AppHeaderMenu.vue'
import StoreGooglePlay from '~/components/icons/StoreGooglePlay.vue'
import StoreAppStore from '~/components/icons/StoreAppStore.vue'
import StoreAppGallery from '~/components/icons/StoreAppGallery.vue'
import SocialYoutube from '~/components/icons/SocialYoutube.vue'
import SocialInstagram from '~/components/icons/SocialInstagram.vue'
import SocialFacebook from '~/components/icons/SocialFacebook.vue'
import SocialGoogle from '~/components/icons/SocialGoogle.vue'
import SocialTwitter from '~/components/icons/SocialTwitter'
import Mplus from '~/components/logo/Mplus.vue'
import MplusXmas from '~/components/logo/MplusXmas.vue'
import IconClose from '~/components/icons/IconClose.vue'
import IconBurger from '~/components/icons/IconBurger.vue'
import UserMenu from './UserMenu'
import IconBell from '~/components/icons/IconBell.vue'
import ClickOutside from '~/components/tools/ClickOutside.vue'
import IconCheckAll from '~/components/icons/IconCheckAll.vue'
import IconArrowRightLong from '~/components/icons/IconArrowRightLong.vue'
import NotifBell from '~/components/NotifBell.vue'

export default {
  components: {
    AppHeaderMenu,
    StoreGooglePlay,
    StoreAppStore,
    StoreAppGallery,
    SocialYoutube,
    SocialInstagram,
    SocialFacebook,
    SocialGoogle,
    SocialTwitter,
    Mplus,
    IconBurger,
    IconClose,
    UserMenu,
    MplusXmas,
    IconBell,
    ClickOutside,
    IconCheckAll,
    IconArrowRightLong,
    NotifBell,
  },
  data() {
    return {
      mobileMenuShow: false,
      notifs: this.$store.state.notifications.notifs,
      adShow: false,
    }
  },
  computed: {
    user() {
      return null
    },
  },
  methods: {
    closeAd() {
      this.adShow = false
      window.localStorage.setItem('adPlusboxWatched', true)
    },
    closeAdRedirect() {
      window.localStorage.setItem('adPlusboxWatched', true);
      location.href = "https://www.mplus.mn/book-promo";
    },
    toggleMobileMenu() {
      this.mobileMenuShow = !this.mobileMenuShow
      document.querySelector('.main').classList.toggle('hidden')
      document.querySelector('.footer').classList.toggle('hidden')
    },
    userLogin() {
      window.localStorage.setItem('prevUrl', this.$route.path)
      this.$auth.login()
    },

    markAsSeen(id, status, type = 'single') {
      if (type == 'all') {
        this.$axios
          .post(
            this.$config.accountApiUrl +
              '/api/notification/notifications/events-all',
            {
              status: 'seen',
            },
            { withCredentials: true }
          )
          .then(
            (res) =>
              this.$store.commit(
                'notifications/UPDATE_NOTIFICATIONS',
                this.$store.state.notifications.notifs.data.map((i) => {
                  return { ...i, userEventStatus: 'seen' }
                })
              ),
            (this.notifs = this.$store.state.notifications.notifs)
          )
      }
      if (status == 'seen') {
        this.$axios
          .post(
            this.$config.accountApiUrl +
              '/api/notification/notifications/events',
            {
              user_id: this.$store.state.auth.user.id,
              notification_id: id,
              status: status,
            },
            { withCredentials: true }
          )
          .then((res) => {
            let tmp = { data: null }
            tmp.data = this.$store.state.notifications.notifs.data.map((i) => {
              if (id == i.id) {
                return { ...i, userEventStatus: 'seen' }
              }
              return i
            })
            this.$store.commit('notifications/UPDATE_NOTIFICATIONS', tmp)
            this.notifs = this.$store.state.notifications.notifs
          })
      }
    },
  },
  mounted() {
    /*
    if (window.localStorage.getItem('adPlusboxWatched')) {
      this.adShow = false
    } else {
      this.adShow = true
    }
    */
  },
  watch: {
    $route() {
      if (this.mobileMenuShow) {
        this.toggleMobileMenu()
      }
    },
  },
}
</script>
<style scoped></style>
