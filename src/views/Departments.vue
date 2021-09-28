<template>
    <div class="row">
      <div class="column" style="background-color:black;">
        <h2>ABB Works</h2>
        <p></p>
      </div>
      <div class="column" style="background-color:black;">
        <h2>Brazing</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>C-I-C</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>Laser Cutting</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>Laser Marketing</h2>
        <p></p>
      </div>
    </div>

    <div class="row2">
      <div class="column" style="background-color:black;">
        <h2>PCD Inserts</h2>
        <p></p>
      </div>
      <div class="column" style="background-color:black ;">
        <h2>Quality Control</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>Round Tools</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>Tool Holders</h2>
        <p></p>
      </div>

      <div class="column" style="background-color:black;">
        <h2>Wire Cutting</h2>
        <p></p>
      </div>

      
    </div>





      

</template>

<script>
export default {

}
</script>

<style>

* {
  box-sizing: border-box;
}


/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 200px;
  padding: 10px;
  margin-left: 40px;
  width: 200px;
max-width: 900px;
padding: 20px 30px ;
border-radius: 10px;
background-color:black ;
box-shadow:0 10px 10px 10px rgba(0, 0, 0, 0.5);
font-weight:700;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: white;
opacity: 0.7;
}

.column:hover{
filter: brightness(110%);

}

.column:active{
    transform: translate(0, 5px);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.5);
}


@media screen and (max-width:600px){
    .column{

    }
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.row2:after {
  content: "";
  display: table;
  clear: both;
}

.row{

margin-top: 100px;
margin-left: 0px;


}

.row2{
margin-top: 100px;
}





</style>