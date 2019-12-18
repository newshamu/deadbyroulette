<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-btn v-on:click="getPerks()">Perk</v-btn>
      </v-flex>
    </v-layout>
    
    <v-layout v-on:change="randPerks">
      <v-flex xs4 v-for="perk in randPerks" :key="perk.name">
        <v-img
          :src="perk.link"
          max-width="128"
          max-height="128"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'PerkList',
  methods: {
    getPerks: function () {
      // Set up vars
      this.randPerks = [];
      const keys = Object.keys(this.sPerks);

      // Create random index list
      while (this.randPerks.length < 4) {
        let key = keys[Math.floor(Math.random() * keys.length)];
        let perk = {
          'name': key,
          'link': this.sPerks[key]
        }
        if (!this.randPerks.includes(perk)) {
          this.randPerks.push(perk);
        }
      }
      // eslint-disable-next-line no-console
      this.randPerks;
      this.showPerks = true;
    }
  },
  data: () => {
    return {   
      showPerks: false, 
      randPerks: [],
      sPerks: {
        'Dark Sense': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/92/IconPerks_darkSense.png?version=ac39109c8d521c2b62c901eb7683924f',
        'Deja Vu': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/2a/DejaVu.gif?version=9de0a5e9a2e2c8bd1b213a3985582691',
        'Hope': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/23/Hope.gif?version=19330887b2f60e74b29b87d68ba6f4b8',
        'Kindred': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/27/Kindred.gif?version=bbcfbd6540272d83246d3bcceb9e1b6b',
        'Lightweight': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/18/Lightweight.gif?version=5e2ba9d31e7ddac7d3fcaf7daa6e7fb0',
        'No One Left Behind': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f7/NoOneLeftBehind.gif?version=338f98d8b74fc3fdf955ef52001dc5ad',
        "Plunderer's Instinct": 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/ff/PlunderersInstinct.gif?version=1b83c8ac11d1cf8f89a16eae7b5dc6c0',
        'Premonition': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/cf/Premonition.gif?version=239c473a8281dbfecb1492ffe7f51548',
        'Resilience': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/22/Resilience.gif?version=666ee74e10327b5a2a12020e20fbe1f9',
        'Slippery Meat': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/06/SlipperyMeat.gif?version=f324594ca2a5fa10e0d232ea23f34c15',
        'Small Game': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/b/b6/SmallGame.gif?version=231a0c4c5411084446ef18df6fe22d74',
        'Spine Chill': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/c/cb/SpineChill.gif?version=14f53e7db7070c510e4072a8f17e5869',
        'This Is Not Happening': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/30/ThisIsNotHappening.gif?version=2d64e5b20b46cdd9efa0292d070b9dd1',
        "We'll Make It": 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/0a/WellMakeIt.gif?version=3567b2095c4f459ec59bba2e6eb10e83',
        'Bond': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/8c/Bond.gif?version=d1ad4db135d93ee5acd6bd1cf5561722',
        'Prove Thyself': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/4e/ProveThyself.gif?version=0972c25f0acb5c6f57a788d6610c36ba',
        'Leader': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7a/Leader.gif?version=cf834fb7853d5334fac135ef41483be0',
        'Quick & Quiet': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/05/QuickAndQuiet.gif?version=66ab51f09fda271d976e7bedb12cae92',
        'Sprint Burst': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/84/SprintBurst.gif?version=7db2e1b2c039617944c1f62f0430df43',
        'Adrenaline': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/af/Adrenaline.gif?version=6d46ffe2ffba152e0e8c17b1e893e739',
        'Empathy': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/48/Empathy.gif?version=84345d93f584bacd18df07302e04012c',
        'Botany Knowledge': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/b/bb/BotanyKnowledge.gif?version=c9bc169cc40e8fa819c6b497ab15f0e8',
        'Self Care': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/6b/SelfCare.gif?version=fe1ec5b4238f5e04ee4f0ab6f8e79324',
        'Iron Will': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a1/IronWill.gif?version=42c3e733499b0beedbdca9cea0100d49',
        'Calm Spirit': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/d8/CalmSpirit.gif?version=491c8f4cadb8f37a4d6cfd8cf5a031e4',
        'Saboteur': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/02/Saboteur.gif?version=932b82ff3d85ac55e0e48106c40fb0ee',
        'Balanced Landing': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/2b/BalancedLanding.gif?version=3b299a0f149fd36cb99b562e8346f5e9',
        'Urban Evasion': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a0/UrbanEvasion.gif?version=148325bebfa1245a77a5a5d50f6bddc4',
        'Streetwise': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/ef/Streetwise.gif?version=d2a8577454fe86afa6780ad958a2fadf',
        'Sole Survivor': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7b/SoleSurvivor.gif?version=dba1e63c35f5ede9053c338cbc49affa',
        'Object of Obsession': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/1e/ObjectOfObsession.gif?version=26b57b11d87297c1bad0429703606c9c',
        'Decisive Strike': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/44/DecisiveStrike.gif?version=440c331ce867755bededa4f131be2c1b',
        'Open-Handed': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/65/Open-Handed.gif?version=7807bd63651be563824bd7c64abff45e',
        'Up the Ante': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/b/bb/UpTheAnte.gif?version=0aeba0a8944cbc7a10426558bf813dc1',
        'Ace in the Hole': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/2f/AceInTheHole.gif?version=d76b4a8e0133ea0963b706abd7d05fbc',
        'Left Behind': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/71/LeftBehind.gif?version=592022790ab5b29fdb2d18c72cd1f539',
        'Borrowed Time': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/5d/BorrowedTime.gif?version=992cc06149989065e44c683cd67aa145',
        'Unbreakable': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a6/Unbreakable.gif?version=fd84d833196eca59523bf00923010069',
        'Technician': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/00/Technician.gif?version=a4cf7021b8b292c27c2b910e20c6be40',
        'Lithe': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/8/8d/Lithe.gif?version=8bbe35a2973cac59b4f01e2055986fd5',
        'Alert': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/e7/Alert.gif?version=5baa758c11c81fa2d37551f8da1c218a',
        "We're Gonna Live Forever": 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/0f/WereGonnaLiveForever.gif?version=31a34783147381c2c4a0c4aafa9dd9a7',
        'Dead Hard': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/ea/DeadHard.gif?version=e8896d68c4863755bc2e8b33a054c105',
        'No Mither': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/57/NoMither.gif?version=43652d1376a727999b880f7d6362542d',
        'Wake Up!': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/09/WakeUp.gif?version=061ce477ca0c3268ecd09ef02ada43c3',
        'Pharmacy': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/0/08/Pharmacy.gif?version=b0531e89a3d7e9c9d93d4967b39508e5',
        'Vigil': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/16/Vigil.gif?version=801a4df7f84f9e9c88ab3a83627ae19a',
        'Tenacity': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/9/95/Tenacity.gif?version=171114ce84af1904a33035455cf109a1',
        "Detective's Hunch": 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/33/DetectivesHunch.gif?version=4c39344e493286d518128d0ad6c66f22',
        'Stake Out': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/db/StakeOut.gif?version=a09e3d9f396ec3732c54894bc9fe69df',
        'Dance With Me': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/e/e6/DanceWithMe.gif?version=8abaa0b284aed758de09cdad536a9ddd',
        'Windows of Opportunity': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/6c/WindowsOfOpportunity.gif?version=3845b268dce62363c7ad70d78f9148d6',
        'Boil Over': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7e/BoilOver.gif?version=73455f5a66867d4c458247bab9d57336',
        'Diversion': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/ff/Diversion.gif?version=40766811792e1e23d8ba21293c2e8773',
        'Deliverance': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/24/Deliverance.gif?version=c2e8b99a595419ef827fd4a21e832683',
        'Autodidact': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7d/Autodidact.gif?version=ab886001cedc2d68b05e2a54b3627d5f',
        'Breakdown': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/26/Breakdown.gif?version=98f454b5b42dd17cce021a6be492a4f2',
        'Aftercare': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7d/Aftercare.gif?version=6083b71aaa3371caa1d58069c5cb77e5',
        'Distortion': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/58/Distortion.gif?version=57e75d519643fb27dc545604cea5770f',
        'Solidarity': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/77/Solidarity.gif?version=d9aeab6836a07c721897016e16ca2691',
        'Poised': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/a/a3/Poised.gif?version=84994f1703b70e925b28e05885377f0b',
        'Head On': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/4b/HeadOn.gif?version=e13169fe50101a909712162b0431ba7b',
        'Flip-Flop': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7b/Flip-Flop.gif?version=1be562a4d631f65afbaba810057fb630',
        'Buckle Up': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/6/64/BuckleUp.gif?version=4ad4be6afac09ebc4b4cc82d0a236e56',
        'Mettle of Man': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/45/MettleOfMan.gif?version=29b22be052e1a430d44eae5b707459a0',
        'Better Together': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/78/BetterTogether.gif?version=66b5842c35d9e1deecfed41ecbca2038',
        'Fixated': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/d/de/Fixated.gif?version=68c570f181092fb6f166f666dc2e0063',
        'Inner Strength': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/3/30/InnerStrength.gif?version=6f6df7da25399c514c09c732912e49d0',
        'Babysitter': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/7/7b/Babysitter.gif?version=bd4c2b83ccd7f69c8e450db7b313e006',
        'Camaraderie': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/1/16/Camaraderie.gif?version=d478a8c301517a23c86ebbf06aa704e3',
        'Second Wind': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/4/41/SecondWind.gif?version=f205dc34359285a7201bd2d3a601b6e5',
        'Lucky Break': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/f/f7/LuckyBreak.gif?version=feb6c5f0ef69e0201223ddb48f2619d1',
        'Any Means Necessary': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/2/25/AnyMeansNecessary.gif?version=62a6443d5dda1c1e69ec46b99651c000',
        'Breakout': 'https://gamepedia.cursecdn.com/deadbydaylight_gamepedia_en/5/50/Breakout.gif?version=40e5cb02455d4cd3ea5b6dcca43cdcaf',
      }
    }
  }
};
</script>
