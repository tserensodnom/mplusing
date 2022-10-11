<template>
  <div
    v-if="$store.state.auth.loggedIn"
    class="w-full grid grid-cols-12 relative"
  >
    <div
      v-if="this.$route.query['mode'] != 'app'"
      class="
        col-span-12
        h-16
        md:hidden
        bg-blueGray-50
        flex flex-row
        items-center
        justify-between
        p-5
        sm:px-11
        text-black
      "
    >
      <div
        @click="$router.go(-1)"
        class="cursor-pointer flex flex-row items-center text-sm space-x-3"
      >
        <icon-arrow-left
          :overrideColorByFont="true"
          :resizeMultiply="1.2"
        ></icon-arrow-left>
        <p>{{ routeName }}</p>
      </div>

      <div class="cursor-pointer" @click="toggleSideBar()">
        <icon-burger></icon-burger>
      </div>
    </div>
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-3 2xl:col-span-8
        flex flex-row
        px-5
        sm:px-0
        pt-5
        md:pt-10
      "
    >
      <div
        v-if="showSideBar"
        class="absolute inset-0 bg-black transition duration-150 z-30"
        :class="showSideBar ? 'opacity-75' : 'opacity-0'"
        @click="toggleSideBar()"
      ></div>
      <div
        class="
          absolute
          sidebar
          top-0
          bottom-0
          left-0
          p-5
          md:p-0 md:static
          w-4/5
          md:w-1/4 md:pr-10
          flex flex-col
          space-y-7
          bg-white
          z-40
          transform
          transition
          duration-300
          md:translate-x-0
        "
        :class="showSideBar ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex flex-row flex-shrink-0 space-x-3">
          <div class="w-16 h-16 rounded-2xl bg-gray-50 overflow-hidden">
            <img
              :src="this.$store.state.auth.user.cover_url"
              alt=""
              class="object-cover"
            />
          </div>
          <div class="flex flex-col justify-center">
            <p class="font-bold w-28 overflow-ellipsis">
              {{
                this.$store.state.auth.user.name.length > 1
                  ? this.$store.state.auth.user.name
                  : 'Хэрэглэгч'
              }}
            </p>
            <p class="text-xs text-blueGray-400">
              ID: {{ this.$store.state.auth.user.id }}
            </p>
          </div>
        </div>
        <div
          v-if="publishers && publishers[0]"
          class="text-blueGray-400 space-y-5 text-sm"
        >
          <p class="pb-4 border-b border-blueGray-100 font-semibold text-black">
            Нийтлэгч
          </p>
          <a
            v-for="item in publishers"
            :key="item.id"
            :href="$config.authBaseUrl + '/@' + item.slug + '/control'"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-top
              cursor-pointer
            "
          >
            <icon-mic
              class="text-brand"
              v-if="item.creatures.has_podcast"
            ></icon-mic>
            <icon-compose class="text-brand" v-else></icon-compose>
            <p class="flex-grow flex flex-col">
              <span class="text-brand">{{ item.name }}</span>
              <span
                v-if="item.creatures.has_podcast"
                class="text-xs text-blueGray-400"
                >Подкаст</span
              ><span v-else class="text-xs text-blueGray-400">Нийтлэгч</span>
            </p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </a>
        </div>
        <div class="text-blueGray-400 space-y-5 text-sm">
          <p class="pb-4 border-b border-blueGray-100 font-semibold text-black">
            Миний сан
          </p>

          <NuxtLink
            to="/account"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="this.$route.path == '/account' && 'text-brand'"
          >
            <icon-analysis-in-box></icon-analysis-in-box>
            <p class="flex-grow">Миний булан</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>

          <NuxtLink
            to="/account/books"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="this.$route.path == '/account/books' && 'text-brand'"
          >
            <icon-book-menu></icon-book-menu>
            <p class="flex-grow">Ном</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>

          <NuxtLink
            to="/account/invoices"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="this.$route.path == '/account/invoices' && 'text-brand'"
          >
            <icon-receipt></icon-receipt>
            <p class="flex-grow">Нэхэмжлэх</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/notifications"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/notifications' && 'text-brand'
            "
          >
            <notif-bell
              :class="
                this.$route.path == '/account/notifications' && 'text-brand'
              "
            ></notif-bell>
            <p class="flex-grow">Мэдэгдэл</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/cards"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="this.$route.path == '/account/cards' && 'text-brand'"
          >
            <icon-gift></icon-gift>
            <p class="flex-grow">Миний бэлгүүд</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/support"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="this.$route.path == '/account/support' && 'text-brand'"
          >
            <icon-support></icon-support>
            <p class="flex-grow">Тусламжийн хүсэлт</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
        </div>
        <div class="text-blueGray-400 space-y-5 text-sm">
          <p class="pb-4 border-b border-blueGray-100 font-semibold text-black">
            Тохиргоо
          </p>
          <NuxtLink
            to="/account/settings/profile"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/settings/profile' && 'text-brand'
            "
          >
            <icon-person></icon-person>
            <p class="flex-grow">Хувийн мэдээлэл</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/settings/password"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/settings/password' && 'text-brand'
            "
          >
            <icon-password></icon-password>
            <p class="flex-grow">Нууц үг солих</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/settings/devices"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/settings/devices' && 'text-brand'
            "
          >
            <icon-phone> </icon-phone>
            <p class="flex-grow">Төхөөрөмж</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/settings/payment-cards"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/settings/payment-cards' &&
              'text-brand'
            "
          >
            <icon-card></icon-card>
            <p class="flex-grow">Карт холбох</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <NuxtLink
            to="/account/settings/social-accounts"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
            :class="
              this.$route.path == '/account/settings/social-accounts' &&
              'text-brand'
            "
          >
            <icon-facebook></icon-facebook>
            <p class="flex-grow">Сошиал бүртгэл</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </NuxtLink>
          <div
            v-if="false"
            class="
              group
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
          >
            <icon-bell-plus></icon-bell-plus>
            <p class="flex-grow">Мэдэгдэл тохиргоо</p>
            <icon-arrow-left
              class="
                transform
                rotate-180
                opacity-0
                group-hover:opacity-100
                transition
                duration-300
              "
              :overrideColorByFont="true"
            ></icon-arrow-left>
          </div>
          <a
            @click="logOut()"
            class="
              flex flex-row
              space-x-3
              justify-evenly
              items-center
              cursor-pointer
            "
          >
            <icon-logout
              :resizeMultiply="1.2"
              class="transform rotate-180"
            ></icon-logout>
            <p class="flex-grow">Гарах</p>
          </a>
        </div>
      </div>

      <nuxt-child
        class="w-full md:w-3/4 sm:pl-1"
        :style="
          !this.$store.state.globalVariables.showFooter
            ? 'min-height: 700px'
            : ''
        "
      ></nuxt-child>
    </div>
  </div>
</template>

<script>
import IconMic from '../components/icons/IconMic.vue'
import IconCompose from '../components/icons/IconCompose.vue'
import IconClose from '../components/icons/IconClose.vue'
import IconBurger from '../components/icons/IconBurger.vue'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'
import IconBellPlus from '~/components/icons/IconBellPlus.vue'
import IconCard from '~/components/icons/IconCard.vue'
import IconLogout from '~/components/icons/IconLogout.vue'
import IconPassword from '~/components/icons/IconPassword.vue'
import IconPhone from '~/components/icons/IconPhone.vue'
import IconSmartPhone from '~/components/icons/IconSmartPhone.vue'
import IconFacebook from '~/components/icons/IconFacebook.vue'
import IconAnalysisInBox from '~/components/icons/IconAnalysisInBox.vue'
import IconBookmark from '~/components/icons/IconBookmark.vue'
import IconReceipt from '~/components/icons/IconReceipt.vue'
import NotifBell from '~/components/NotifBell.vue'
import IconSupport from '~/components/icons/IconSupport.vue'
import IconBookMenu from '~/components/icons/IconBookMenu.vue'
import IconPerson from '~/components/icons/IconPerson.vue'
import IconGift from '~/components/icons/IconGift.vue'

export default {
  components: {
    IconLogout,
    IconPassword,
    IconPhone,
    IconBellPlus,
    IconSmartPhone,
    IconCard,
    IconFacebook,
    IconAnalysisInBox,
    IconBookmark,
    IconReceipt,
    NotifBell,
    IconSupport,
    IconBookMenu,
    IconPerson,
    IconArrowLeft,
    IconBurger,
    IconClose,
    IconCompose,
    IconMic,
    IconGift,
  },
  beforeMount() {
    // if (!this.$store.state.auth.loggedIn) {
    //   window.localStorage.setItem('prevUrl', this.$route.path)
    //   this.$auth.login()
    // }
  },
  mounted() {
    this.$axios
      .get(this.$config.accountApiUrl + '/api/user')
      .then((res) => (this.publishers = res.data.data.publishers))
  },
  data() {
    return {
      showSideBar: false,
      routeName: this.changeRouteName(),
      publishers: null,
    }
  },
  methods: {
    logOut() {
      this.$cookies.removeAll()
      window.location.href = this.$config.authBaseUrl + '/logout'
    },
    toggleSideBar() {
      if (this.showSideBar) {
        this.showSideBar = false
        this.$store.dispatch('globalVariables/reshowFooter')
      } else {
        this.showSideBar = true
        this.$store.dispatch('globalVariables/hideFooter')
      }
    },
    changeRouteName() {
      let name = this.$route.name
      switch (name) {
        case 'account':
          return 'Миний булан'
        case 'account-books':
          return 'Бүтээлүүд'
        case 'account-invoices':
          return 'Нэхэмжлэх'
        case 'account-support':
          return 'Тусламжийн хүсэлт'
        case 'account-cards':
          return 'Бэлэг плас'
        case 'account-settings-profile':
          return 'Хувийн мэдээлэл'
        case 'account-settings-password':
          return 'Нууц үг солих '
        case 'account-settings-devices':
          return 'Төхөөрөмж'
        case 'account-settings-payment-cards':
          return 'Банкны карт холбох'
        case 'account-settings-social-accounts':
          return 'Сошиал бүртгэл холбох '
        case 'account-support-ticket-issue':
          return 'Тусламжийн хүсэлт'
        case 'account-support-ticket-ticketnumber':
          return 'Тусламжийн хүсэлт'
        case 'account-notifications':
          return 'Мэдэгдлүүд'
        default:
          return name
      }
    },
  },
  watch: {
    $route(to, from) {
      this.routeName = this.changeRouteName()
      this.showSideBar = false
      this.$store.dispatch('globalVariables/reshowFooter')
    },
  },

  transition: 'page',
}
</script>

<style></style>
