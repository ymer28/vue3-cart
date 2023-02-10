<template>
  <footer class="footer">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <flag iso="fr" @click="changeLocalLanguage('fr')" class="flag"/>
        </li>
        <li class="link">
          <flag iso="us" @click="changeLocalLanguage('en')" class="flag"/>
        </li>
        <li class="link">
          <flag iso="kr" @click="changeLocalLanguage('kr')" class="flag"/>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  methods: {
    changeLocalLanguage(language) {
      this.$i18n.locale = language;
    }
  }
};
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

   .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .link {
    list-style: none;
    padding: 0 2em;
  }
  .flag:hover {
    cursor: pointer;
  }
</style>