$(function(){
    hentAlle();
});

function kjopBillett() {
    const billett = {
        film: $("#film").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
    };

    if (ingenValideringsFeil()) {
        $.get("/lagre", billett, function () {
            hentAlle();
        });

            $("#antall").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#telefonnr").val("");
            $("#epost").val("");

    }

}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        formaterData(data);
    });
}

function formaterData(billetter){
    var ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epostadresse</th>" +
        "</tr>";
    for(let i in billetter ){
        ut+="<tr><td>"+billetter[i].film+"</td><td>"+billetter[i].antall+"</td><td>"+billetter[i].fornavn+"</td><td>"+billetter[i].etternavn+"</td><td>"+billetter[i].telefonnr+"</td><td>"+billetter[i].epost+"</td></tr>"
    }
    $("#billetter").html(ut);
}

function slettBilletter() {
    $.get( "/slettAlle", function( data ) {
        hentAlle();
    });
};