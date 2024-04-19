function validerFornavn() {
    const fornavn = $("#fornavn").val();
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(fornavn);
    if(!ok){
        $("#feilFornavn").html("Navnet må bestå av 2 til 20 bokstaver");
        return false;
    }
    else{
        $("#feilFornavn").html("");
        return true;
    }
}



function validerEtternavn() {
    const etternavn = $("#etternavn").val();
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(etternavn);

    if(!ok){
        $("#feilEtternavn").html("Etternavn må bestå av 2 bokstaver til 20 bokstaver");
        return false;
    } else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerTelefonnr(){
    const telefonnr = $("#telefonnr").val();
    const regexp = /^[0-9]{8}$/;
    const ok = regexp.test(telefonnr);
    if(!ok){
        $("#feilTelefonnr").html("Telefonnummeret ditt må bestå av minst og maks 8 sifre!!!");
        return false;
    }
    else{
        $("#feilTelefonnr").html("");
        return true;
    }
}
function validerEpost(){
    const epost = $("#epost").val();
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ok = regexp.test(epost);
    if(!ok){
        $("#feilEpost").html("Oppgi gylig epostadresse");
        return false;
    }
    else{
        $("#feilEpost").html("");
        return true;
    }
}


function ingenValideringsFeil() {
    return (validerFornavn() && validerEtternavn() && validerTelefonnr() && validerEpost());
}