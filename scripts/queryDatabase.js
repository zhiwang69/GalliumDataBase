function addElementToInput(element) {
    const elementSymbol = element.getAttribute("data-symbol");
    const input = document.getElementById("elementInput");
    if (elementSymbol === "*" || input.value.indexOf(elementSymbol) == -1) {
        input.value += elementSymbol + ',';
    }
}

function clearElementInput() {
    const input = document.getElementById("elementInput");
    input.value = '';
}

const ITEMS_PER_PAGE = 20;

function renderTable(data, page) {
    const tableBody = $("#queryResultTable tbody");
    const itemCount = data.length;
    const numResultsHeader = document.getElementById("queryResultTitle");
    numResultsHeader.textContent = itemCount + ' results';
    tableBody.empty();

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(data.length, startIndex + ITEMS_PER_PAGE);

    for (let i = startIndex; i < endIndex; i++) {
        const doc = data[i];
        const row = $("<tr></tr>");
        const tmp1 = (doc.energy_above_hull).toFixed(2) + " eV/atom";
        const tmp2 = (doc.band_gap).toFixed(2) + " eV";
        row.append($("<td></td>").text(doc.material_id));
        row.append($("<td></td>").text(doc.formula_pretty));
        row.append($("<td></td>").text(doc.symmetry.crystal_system));
        row.append($("<td></td>").text(doc.symmetry.symbol));
        row.append($("<td></td>").text(doc.nsites));
        row.append($("<td></td>").text(tmp1));
        row.append($("<td></td>").text(tmp2));
        tableBody.append(row);
    }
}

function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const paginationElement = $("#pagination .pagination");
    paginationElement.empty();
    paginationElement.css("overflow", "auto");

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = $("<li></li>").addClass("page-item");
        if (i === currentPage) {
            pageItem.addClass("active");
        }
        const pageLink = $("<a></a>").addClass("page-link").attr("href", "#").text(i);
        pageItem.append(pageLink);
        paginationElement.append(pageItem);
    }
}

$(document).ready(function () {
    $("#submit").on("click", function (e) {

        e.preventDefault(); // 阻止默认行为

        console.log($("#ifOnlyContainTrue:checked").val())
        console.log($("#ifOnlyContainFalse:checked").val())

        const input = $("#elementInput").val();
        const elements = input.split(",");
        elements.pop();
        const size = elements.length;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === "*") {
                elements.splice(i, 1);
                i--;
            }
        }

        let query;

        if ($("#ifOnlyContainTrue:checked").val()) {
            query = { elements: { $all: elements, $size: size } };
        }
        else if ($("#ifOnlyContainFalse:checked").val()) {
            query = { elements: { $all: elements } };
        }
        else {
            console.error("Error: input error");
            const numResultsHeader = document.getElementById("queryResultTitle");
            numResultsHeader.textContent = "Error occured: invalid input";
            $("#queryResultTitle").css("color", "red");
            $("#loading").css("display", "none");
        }

        if (query) {

            console.log(query);
            console.log(JSON.stringify(query));

            $.ajax({
                type: "POST",
                url: "http://localhost:3000/search",
                timeout : 30000,
                data: JSON.stringify(query),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {
                    $("#loading").css("display", "flex");
                },
                success: function (data) {
                    console.log("Success");
                    dataCache = data;
                    renderTable(data, 1);
                    renderPagination(data.length, 1);
                    $("#queryResultTitle").css("color", "black");
                    $("#loading").css("display", "none");
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.error("Status: ", XMLHttpRequest.status);
                    console.error("readyState: ", XMLHttpRequest.readyState);
                    console.error("textStatus: ", textStatus);
                    console.error("errorThrown: ",errorThrown);
                    const numResultsHeader = document.getElementById("queryResultTitle");
                    numResultsHeader.textContent = "Error: XMLHttpRequest status " + String(XMLHttpRequest.status);
                    $("#queryResultTitle").css("color", "red");
                    $("#loading").css("display", "none");
                },
            });
        }
    });

    $("#clear").on("click", function (e) {
        e.preventDefault(); // 阻止默认行为
    });

    $("#pagination").on("click", ".page-link", function (e) {
        e.preventDefault();
        const pageNumber = parseInt($(this).text());
        renderTable(dataCache, pageNumber);
        renderPagination(dataCache.length, pageNumber);
    });
});
