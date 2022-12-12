<template>
  <section class="section">
    <b-input
      v-model="searchInput"
      type="search"
      icon="magnify"
      class="mb-5 mx-2"
    />
    <section ref="scrollArea" class="scroll-area px-2" @scroll="checkScroll">
      <div v-for="(user, idx) in users" :key="idx" class="user-card is-flex is-align-items-center">
        <nuxt-img :src="user.avatar" loading="lazy" class="user-avatar" />
        <div class="right-side">
          <div class="top-right ml-5 is-flex is-justify-content-space-between is-align-items-flex-start">
            <h3 class="user-name mb-1">
              {{ user.name }}
            </h3>
            <p class="mr-2">
              {{ user.email }}
            </p>
          </div>
          <div class="mid-right ml-5">
            <p class="user-title mb-1">
              {{ user.title }}
            </p>
            <p class="user-address mb-1">
              {{ `${user.address}, ${user.city}` }}
            </p>
          </div>
          <div class="bottom-right mt-4">
            <b-button v-if="!selection().includes(user.name)" class="button ml-5" @click="selectUser(user.name)">
              MARK AS SUITABLE
            </b-button>
            <b-button v-else class="button ml-5" @click="unselectUser(user.name)">
              SKIP SELECTION
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  data () {
    return {
      initialIdx: 0,
      finalIdx: 9,
      searchInput: ''
    }
  },
  computed: {
    users () {
      return this.$store.getters.getUsers(this.initialIdx, this.finalIdx)
    }
  },
  methods: {
    ...mapGetters({ selection: 'getSelection' }),

    selectUser (userName) {
      this.$store.commit('selectUser', userName)
    },
    unselectUser (userName) {
      this.$store.commit('unselectUser', userName)
    },
    checkScroll () {
      const el = this.$refs.scrollArea
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        this.finalIdx += 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-card {
    background: #e5e5e5;
    margin-bottom: 21px;
    min-height: 180px;
  }
  .user-avatar {
    background: #bbbbbb;
    height: 100%;
    max-height: 180px;
  }
  .user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .user-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
  .user-address {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  .button {
    background: transparent;
    border: none;
    color: #009688;
  }
  .bottom-right {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  .right-side {
    width: 100%;
  }
  .scroll-area {
    height: 650px;
    overflow: hidden;
    overflow-y: auto;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

/* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.16);
    width: 1px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #4D4D4D;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
