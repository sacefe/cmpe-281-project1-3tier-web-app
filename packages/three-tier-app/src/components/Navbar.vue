<template>
   <b-navbar toggleable="sm" variant="white" type="primary" class="shadow">
       <b-container>
            <b-navbar-brand to="/" class= "text-primary">  
                 <fa :icon="['fab','aws']" />  CMPE-281 Project # 1
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
    
                <b-navbar-nav class="ml-auto">
                  <b-nav>      
                    <b-nav-item to="/login">Register/Login   <fa :icon="['fas', 'user']"/>  </b-nav-item>
                  </b-nav>
                </b-navbar-nav>

            </b-collapse>
       </b-container>
    </b-navbar>
</template>


