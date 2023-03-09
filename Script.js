$(() => {
    $.get('https://www.sherborne.com/about-us/key-information/term-dates', function (response) {

        if (response != null) {

            let table = $($.parseHTML(response)).find('table')[0];
            let body = $(table).find('tbody')[0];
            let trs = $(body).find('tr');



            let tbl = $('<table id="term-dates-table"></table>');

            for (var i = 0; i < trs.length; i++) {
                let tds = $(trs[i]).find('td');

                let leftText = $(tds[0]).html();
                let rightText = $(tds[1]).html();

                console.log(`${leftText} -> ${rightText}`);

                let tr = $('<tr class="term-dates-table-row"></tr>');

                let leftTextTd = $(`<td class="term-dates-table-row-data term-dates-table-row-data-left"><div style="margin: 20px">${leftText}</div></td>`);
                let rightTextTd = $(`<td class="term-dates-table-row-data term-dates-table-row-data-right"><div style="margin: 20px">${rightText}</div></td>`);

                tr.append(leftTextTd);
                tr.append(rightTextTd);

                tbl.append(tr);


            }

            $('#term-dates').append(tbl);

            let termName = $($($($(table).find('thead')[0]).find('tr')[0]).find('th')[0]).html();

            $('#term-name').html(termName);



        }
        else {

            $('#term-dates').append('<p>An error occured</p>');

        }
    }
    

        )
});
