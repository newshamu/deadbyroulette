<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dead By Roulette</v-toolbar-title>
    </v-app-bar>
    
    <v-content>
      <perk-select class="ma-5" :availablePerks="availablePerks" />
      <Perk-display :availablePerks="availablePerks" />
    </v-content>
  </v-app>
</template>

<script>
import PerkSelect from './components/PerkSelect'
import PerkDisplay from './components/PerkDisplay';

export default {
  name: 'App',

  components: {
    PerkSelect,
    PerkDisplay
  },

  mounted() {
    this.availablePerks = this.sPerks;
  },

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  data() {
    return {
      sPerks: [{
          name: 'Ace in the Hole',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/24/IconPerks_aceInTheHole.png?version=7bc96fa684a0d1340417965dd30ff0cf',
        },{
          name: 'Adrenaline',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f7/IconPerks_adrenaline.png?version=39ed6f10b9a42e7a59a68ab646c457d0',
        },{
          name: 'Aftercare',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/0d/IconPerks_aftercare.png?version=7e0827f2ee75373881405fcdf24a74ab',
        },{
          name: 'Alert',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/71/IconPerks_alert.png?version=68a57066a2442241351a0a1f766d8204',
        },{
          name: 'Any Means Necessary',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/79/IconPerks_anyMeansNecessary.png?version=aec87167b0f1afbf7175c008e796d313',
        },{
          name: 'Autodidact',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/96/IconPerks_autodidact.png?version=0873349699402b1594ec49c9ac808026',
        },{
          name: 'Babysitter',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/db/IconPerks_babysitter.png?version=ac427594451337b56f5a033a5806dac4',
        },{
          name: 'Balanced Landing',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/5e/IconPerks_balancedLanding.png?version=29efaac9dcf7cafb2a57cca9ea0fa9c8',
        },{
          name: 'Better Together',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/02/IconPerks_betterTogether.png?version=066081e0955af5cdc09d32b3a914037a',
        },{
          name: 'Boil Over',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f5/IconPerks_boilOver.png?version=b9488ebfa73e2084714f5a76f132b661',
        },{
          name: 'Bond',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a0/IconPerks_bond.png?version=85981d4df1740bb255284db8d2119e47',
        },{
          name: 'Borrowed Time',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a3/IconPerks_borrowedTime.png?version=6d301340b3f6c61e8df51b477e344c29',
        },{
          name: 'Botany Knowledge',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/1e/IconPerks_botanyKnowledge.png?version=6c283d58f55529a2136673176cebbe52',
        },{
          name: 'Breakdown',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/6c/IconPerks_breakdown.png?version=bc09d174accf1543befaf5974d34cf0e',
        },{
          name: 'Breakout',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/d0/IconPerks_breakout.png?version=e9eb038a78ca939dbec3c863761ba59b',
        },{
          name: 'Buckle Up',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/74/IconPerks_buckleUp.png?version=04cc58855c0ba20acc324ce58b5ebf9b',
        },{
          name: 'Calm Spirit',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/6c/IconPerks_calmSpirit.png?version=b06db052216a4e5eec61d89df946bc87',
        },{
          name: 'Camaraderie',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/1d/IconPerks_camaraderie.png?version=1ff636022b3363f00d6a71a306d84dc7',
        },{
          name: 'Dance With Me',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/17/IconPerks_danceWithMe.png?version=f5fd488ed934f70033ac7850adc17f15',
        },{
          name: 'Dark Sense',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/92/IconPerks_darkSense.png?version=ac39109c8d521c2b62c901eb7683924f',
        },{
          name: 'Dead Hard',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/75/IconPerks_deadHard.png?version=0865ae1dada3c5879a6e576a65abadf1',
        },{
          name: 'Decisive Strike',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/ee/IconPerks_decisiveStrike.png?version=44ad8435b28a82fc47b9d12c57e0c241',
        },{
          name: 'Deja Vu',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/89/IconPerks_dejaVu.png?version=31e8c6bbdbf8e062b0778d6b90914173',
        },{
          name: 'Deliverance',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7e/IconPerks_deliverance.png?version=b5746b4079c44908241299979b46d6a5',
        },{
          name: "Detective's Hunch",
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7b/IconPerks_detectivesHunch.png?version=193ede99c41e25e196ec3cd405fd4228',
        },{
          name: 'Distortion',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/41/IconPerks_distortion.png?version=94f5c4b434457d89a8478a05b6cd61e8',
        },{
          name: 'Diversion',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a6/IconPerks_diversion.png?version=e2cfc6fae013bff03e620ffd906fb524',
        },{
          name: 'Empathy',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/ae/IconPerks_empathy.png?version=5d1f265c8bad0069de26855892cc7b6a',
        },{
          name: 'Fixated',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7c/IconPerks_fixated.png?version=5bf3ea1608616637e827093ab8a92525',
        },{
          name: 'Flip-Flop',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/31/IconPerks_flip-Flop.png?version=31036c92868ab730488648610d8f1194',
        },{
          name: 'Head On',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/cb/IconPerks_headOn.png?version=93ef54cfe860d951da7b3ed14e7bcc9f',
        },{
          name: 'Hope',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/18/IconPerks_hope.png?version=159a16bb1672e72ef7235ab1330cbdb1',
        },{
          name: 'Inner Strength',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/47/IconPerks_innerStrength.png?version=78b114a5379fa66aa04dd94a4cb71d6f',
        },{
          name: 'Iron Will',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/58/IconPerks_ironWill.png?version=d46f5389840549a281c91f8461c7ffbe',
        },{
          name: 'Kindred',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a8/IconPerks_kindred.png?version=2cd63868d5759e63e222e69d0d51799d',
        },{
          name: 'Leader',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/3d/IconPerks_leader.png?version=dd5406000f82285a03ec18f607bc573a',
        },{
          name: 'Left Behind',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/c3/IconPerks_leftBehind.png?version=a4b79c80c071960a8141072af352fbaf',
        },{
          name: 'Lightweight',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/67/IconPerks_lightweight.png?version=1dadcc675c754ed33b0a516e57b321ef',
        },{
          name: 'Lithe',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/cc/IconPerks_lithe.png?version=2672e643e8451e347fd3b8bbf5ae974b',
        },{
          name: 'Lucky Break',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a7/IconPerks_luckyBreak.png?version=bfb36a458f4dcaf69eeecf6f878de587',
        },{
          name: 'Mettle of Man',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/52/IconPerks_mettleOfMan.png?version=114983dae013c8da907921f47091d97d',
        },{
          name: 'No Mither',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f5/IconPerks_noMither.png?version=4028da686ddc74b3b0d4e6a8d5bdb673',
        },{
          name: 'No One Left Behind',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/b/b0/IconPerks_noOneLeftBehind.png?version=7aa1114bc55aaa8bd36275ef89efa392',
        },{
          name: 'Object of Obsession',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/2b/IconPerks_objectOfObsession.png?version=9ef450be1c15f4f35b06a16311e09151',
        },{
          name: 'Open-Handed',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/5d/IconPerks_open-Handed.png?version=bcc01454e284da64d9d505c208e9fef5',
        },{
          name: 'Pharmacy',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f1/IconPerks_pharmacy.png?version=a2e81b147b80ea6fbc4e3695d0cc0f2d',
        },{
          name: "Plunderer's Instinct",
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/28/IconPerks_plunderersInstinct.png?version=f31c740201ce2fc5bed755419ea814d4',
        },{
          name: 'Poised',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/52/IconPerks_poised.png?version=6a51fddce4f55b1e7f29b45a5dfa0c11',
        },{
          name: 'Premonition',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/39/IconPerks_premonition.png?version=1419424cf962a5699712f6419932097e',
        },{
          name: 'Prove Thyself',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/0f/IconPerks_proveThyself.png?version=4ed85855474f096828586b8fc3a021c4',
        },{
          name: 'Quick and Quiet',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/14/IconPerks_quickAndQuiet.png?version=80a0639c2647821b461137eec101bfe6',
        },{
          name: 'Resilience',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/ee/IconPerks_resilience.png?version=25f882a10f65ea8f270e99822d4e2a9e',
        },{
          name: 'Saboteur',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/0e/IconPerks_saboteur.png?version=84ca3f74a7c9e9b2210d74a9b4cdac0e',
        },{
          name: 'Second Wind',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/97/IconPerks_secondWind.png?version=acb9d383e15a1abc3aa1c48b1c454acd',
        },{
          name: 'Self-Care',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f1/IconPerks_selfCare.png?version=1ac45ee42c059dcf273b03978040b642',
        },{
          name: 'Slippery Meat',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/03/IconPerks_slipperyMeat.png?version=1e588b2a74433186ae86f47426cb8853',
        },{
          name: 'Small Game',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/dc/IconPerks_smallGame.png?version=3e876c9e3587a31aa66eb4c23752d394',
        },{
          name: 'Sole Survivor',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/8e/IconPerks_soleSurvivor.png?version=0ba4d13657c23171b54cf95927300c8d',
        },{
          name: 'Solidarity',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/9e/IconPerks_solidarity.png?version=37be9f2b58ef51e4f98420c8f721fea8',
        },{
          name: 'Spine Chill',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/57/IconPerks_spineChill.png?version=fa4e64d0b46de806a82b5cf0deb7ead6',
        },{
          name: 'Sprint Burst',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/e4/IconPerks_sprintBurst.png?version=88683b2e88593bc99afa80d66fcca890',
        },{
          name: 'Stake Out',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/cd/IconPerks_stakeOut.png?version=7db6acf07d2cdc3bb7d11bd79cc38a1f',
        },{
          name: 'Streetwise',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/ff/IconPerks_streetwise.png?version=b3e12c52256c162ec5839bb627718d89',
        },{
          name: 'This is Not Happening',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/58/IconPerks_thisIsNotHappening.png?version=60553649c84a7c1295473549e0c5000f',
        },{
          name: 'Technician',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/58/IconPerks_thisIsNotHappening.png?version=60553649c84a7c1295473549e0c5000f',
        },{
          name: 'Tenacity',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/9d/IconPerks_tenacity.png?version=7f55a09cd9e4c47e7913a706bec68526',
        },{
          name: 'Up the Ante',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a3/IconPerks_upTheAnte.png?version=fa84f8af697272cfaa47c94608c44229',
        },{
          name: 'Unbreakable',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/4a/IconPerks_unbreakable.png?version=f0164224fe74712cbffd1f924b4a2166',
        },{
          name: 'Urban Evasion',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/c7/IconPerks_urbanEvasion.png?version=4b10ca6a0ef88cae463a66ae34b1b672',
        },{
          name: 'Vigil',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/46/IconPerks_vigil.png?version=c12ff480a950bfffe58c1a6102c93ea1',
        },{
          name: 'Wake Up',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/fd/IconPerks_wakeUp.png?version=e49661ba55aade1bc598938d0721015b',
        },{
          name: "We'll Make It",
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/8a/IconPerks_wellMakeIt.png?version=e422f5736ee649c7282a730eee7f0765',
        },{
          name: "We're Gonna Live Forever",
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/b/b8/IconPerks_wereGonnaLiveForever.png?version=71314ffe0157faf8f5dbf0f0c1ee450e',
        },{
          name: 'Windows of Opportunity',
          link: 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/17/IconPerks_windowsOfOpportunity.png?version=f0a5393f1aa028c483040de0481cb63c'
        }],
      availablePerks: []
    }
  }
};
</script>
