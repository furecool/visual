<template>
    <nav>

        <v-app-bar flat app dark height="25" style="background:linear-gradient(#d72227, #b12225);">
            <!-- <v-app-bar-nav-icon x-small @click="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-btn text @click="drawer = !drawer" style="background:rgba(0,0,0,0);height:20px;"></v-btn>
            <!-- toolbar -->
            <v-row class="d-flex justify-end" style="width:100%;">
                <v-col class="d-flex flex-row justify-end px-0">
                    <!-- <v-btn text @click="setwin('min')"><v-icon size="16" >mdi-window-minimize</v-icon></v-btn> -->

                    <v-btn text @click="setwin('re')"><v-icon size="16">mdi-window-restore</v-icon></v-btn>

                    <!-- <v-btn text @click="setwin('max')"><v-icon size="16" >mdi-window-maximize</v-icon></v-btn>
                    <v-btn text @click="setwin('close')"><v-icon size="16">mdi-close-thick</v-icon></v-btn> -->
                </v-col>
            </v-row>
        </v-app-bar>
        <!-- Lists -->
        <v-navigation-drawer app v-model="drawer" class="grey darken-2">
            <v-list>
                <v-list-item v-for="link in links" :key="link.id" router :to="link.route" >
                    <v-list-item-action>
                        <v-icon class="white--text">
                            {{link.icon}}
                        </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>   
</template>

<script>
export default ({
    data() {
        return {
            drawer: false,
            links: [
                {icon: 'mdi-account-group', text: '總行權限', route: '/'},
                {icon: 'mdi-account-group-outline', text: '處長權限', route: '/director'},
                {icon: 'mdi-account-multiple', text: '分區權限', route: '/group'},
                {icon: 'mdi-account', text: '分行權限', route: '/branch'},
            ]
        }
    },

    methods: {
        setwin(set) {
            // if(set == 'min') {
            //     console.log('min')
            // }
            if(set == 're') {
                resizeTo(976,608);
                // moveTo(document.documentElement.clientWidth,document.documentElement.clientHeight);
                // moveTo(screen.width-960,screen.height-540);
                // moveTo(screen.availWidth-960,screen.availHeight-540);
                moveTo(screen.availWidth,screen.availHeight);
            }
            else if(set == 'max') {
                resizeTo(window.screen.availWidth,window.screen.availHeight);
                moveTo(0,0);
            }
            else if(set == 'close') {
                window.close();
            }
        },
    },

})
</script>
