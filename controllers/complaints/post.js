const express = require("express");
const router = express.Router();

const { ReturnError } = require("../../func");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // const url = `${process.env.REACT_APP_URL}`;
    // const body = {
    //   subject: "Reklamacja (online)",
    //   description: `
    //   <h4>Reklamacja (online)</h4>
    //   <b>Numer zamówienia lub numer faktury:</b> ${obj.docNumber} <br/>
    //   <b>Producent:</b> ${obj.producer} <br/>
    //   <b>Nazwa i model towaru:</b> ${obj.typeProduct} <br/>
    //   <b>Ilość sztuk:</b> ${obj.quantity} <br/>
    //   <br/>
    //   <b>Rodzaj zgłoszenia:</b> ${obj.typeOfReturn} <br/>
    //   ${
    //     obj.typeOfReturn === "Gwarancja producenta"
    //       ? `<b>Data zakupu:</b> ${obj.buyDate} <br/>`
    //       : ""
    //   }

    //   ${
    //     obj.typeOfReturn === "Rękojmia"
    //       ? `<b>Data zakupu:</b> ${obj.buyDate} <br/>
    //       <b>Oczekiwany sposób zakończenia zgłoszenia:</b> ${obj.howFinish} <br/>`
    //       : ""
    //   }

    //   ${
    //     obj.typeOfReturn === "Dostałem towar uszkodzony"
    //       ? `<b>Czy został sporządzony protokół szkody przez kuriera?:</b> ${obj.isProtocol} <br/>`
    //       : ""
    //   }

    //   ${
    //     obj.typeOfReturn === "Gwarancja producenta" ||
    //     obj.typeOfReturn === "Rękojmia"
    //       ? `<b>Czy produkt wymaga demontażu:</b> ${obj.requiresDisassembly} <br/>`
    //       : ""
    //   }
    //   <br/>
    //   <b>Opis wady:</b> ${obj.description} <br/>
    //   <br/>
    //   <b>Imię i nazwisko lub nazwa firmy:</b> ${obj.name} <br/>
    //   <b>Adres e-mail:</b> ${obj.email} <br/>
    //   <b>Telefon:</b> ${obj.phone} <br/>
    //   <br/>
    //   <b>Ulica:</b> ${obj.street}<br/>
    //   <b>Kod pocztowy:</b> ${obj.zipCode} <br/>
    //   <b>Miejscowość:</b> ${obj.city} <br/>
    //   ${
    //     obj.typeOfReturn === "Gwarancja producenta" ||
    //     obj.typeOfReturn === "Rękojmia"
    //       ? `<b>Adres urządzenia taki sam jak adres powyżej:</b> ${obj.deviceSamePlace} <br/>`
    //       : ""
    //   }

    //   ${
    //     (obj.typeOfReturn === "Gwarancja producenta" ||
    //       obj.typeOfReturn === "Rękojmia") &&
    //     obj.requiresDisassembly === "Tak" &&
    //     obj.deviceSamePlace === "Nie"
    //       ? `<b>Adres urządzenia:
    //       Ulica: </b> ${obj.street2} <br/>
    //       <b>Kod pocztowy: </b> ${obj.zipcode} <br/>
    //       <b>Miejscowość: </b> ${obj.zipcode} <br/>
    //       `
    //       : ""
    //   }
    //   <br/>
    //   <b>Preferowana data odbioru:</b> ${obj.getBack} <br/>
    //   `,
    //   email: obj.email,
    //   phone: obj.phone,
    //   priority: 1,
    //   status: 2,
    //   group_id: 12000006487,
    //   type: "Chcę złożyć reklamację",
    //   custom_fields: {
    //     cf_imie_i_nazwisko_lub_nazwa_firmy: obj.name,
    //     cf_numer_zamowienia_lub_faktury: obj.docNumber,
    //     cf_adres_email243803: obj.email,
    //     cf_tel_kontaktowy186449: obj.phone,
    //     cf_producent935387: obj.producer,
    //     cf_ilosc_sztuk773919: obj.quantity,
    //     cf_nazwa_produktu381809: obj.typeProduct,
    //     cf_opis_wady668036: obj.description,
    //     cf_ulica622429: obj.street,
    //     cf_kod_pocztowy656613: obj.zipCode,
    //     cf_miejscowosc: obj.city,
    //     cf_preferowana_data_odbioru722409: obj.getBack,
    //     cf_data_zakupu483963: obj.buyDate,
    //     cf_czy_sporzadzono_protokol_szkody:
    //       obj.isProtocol === "Tak" ? true : false,
    //     cf_czy_produkt_wymaga_demontazu:
    //       obj.requiresDisassembly === "Tak" ? true : false,
    //     cf_ulica_montazu_urzadzenia: obj.street2,
    //     cf_kod_pocztowy_montazu_urzadzenia: obj.zipCode2,
    //     cf_miejscowosc_montazu_urzadzenia: obj.city2,
    //     cf_rodzaj_zgoszenia66882: obj.typeOfReturn,
    //     cf_oczekiwany_sposb_zakonczenia_zgoszenia: obj.howFinish,
    //   },
    // };

    res.json({ status: 200 });
  } catch (e) {
    ReturnError(res, e);
  }
});

module.exports = router;
