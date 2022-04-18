<template>
<section>
  <div class="patiens-content">
    <table>
        <tr>
            <td>Popescu Ionel</td>
            <td>Timisoara</td>
        </tr>
        <tr>
            <td>Ionescu Marian</td>
            <td>Cluj-Napoca</td>
        </tr>
        <tr>
            <td>Dragulescu Iulian</td>
            <td>Timisoara</td>
        </tr>
        <tr>
            <td>Pop Claudiu</td>
            <td>Timisoara</td>
        </tr>
        <tr>
            <td>Trifoi Alexandru</td>
            <td>Timisoara</td>
        </tr>
        <tr>
            <td>Georgescu Paula</td>
            <td>Cluj-Napoca</td>
        </tr>
    </table>
  </div>
</section>
</template>

<script>

</script>

<style scoped>

.patiens-content {
    margin-top: 20px;
    color: whitesmoke;
    text-align: center;
}

.patiens-content table td {
    border: 1px solid black;
    padding: 30px 200px;
}

.patiens-content table {
    margin:auto;
}

.add-patient {
    margin-top: 25px;
    padding-right: 20px;
    margin-right: 20px;
    width: 100px;
    height: 40px;
}

.remove-patient {
    margin-left: 20px;
    width: 150px;
    height: 40px;
}

</style>