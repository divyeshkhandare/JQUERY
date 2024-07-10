var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  var option = {
    responsive: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart('chart_0', {
    type: 'bar',
    options: option,
    data: data
  });

//   line chart   //

var options = {
    series: [
      {
        name: "Testogen",
        data: [
          178,
          138,
          144,
          167,
          173,
          94,
          88,
          66,
          79,
          73,
          57,
          55,
          60,
          58,
          75,
          58,
          40,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "Blackwolf",
        data: [
          28,
          17,
          27,
          19,
          20,
          16,
          9,
          10,
          11,
          12,
          7,
          8,
          9,
          5,
          20,
          11,
          10,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "PhenGold",
        data: [
          26,
          22,
          19,
          16,
          9,
          13,
          5,
          5,
          14,
          10,
          8,
          15,
          7,
          7,
          14,
          11,
          14,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "BrutalForce ",
        data: [
          97,
          62,
          71,
          91,
          82,
          72,
          45,
          41,
          35,
          32,
          36,
          47,
          45,
          30,
          31,
          52,
          21,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "Viasil",
        data: [
          0,
          0,
          1,
          1,
          2,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          2,
          2,
          0,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "MaleExtra GBP",
        data: [
          0,
          0,
          1,
          1,
          1,
          5,
          2,
          0,
          1,
          1,
          4,
          2,
          2,
          1,
          0,
          1,
          3,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "Immune Defence ",
        data: [
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "Trimtone",
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        name: "Aillea",
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    grid: {
      show: true,
      padding: { left: 0, right: 0 },
      borderColor: "rgba(0,0,0,0.1)"
    },
    tooltip: { theme: "dark" },
    chart: { type: "line", stacked: true, toolbar: { show: false } },
    colors: [
      "#2aae7d",
      "#101010",
      "#c0af92",
      "#000000",
      "#004168",
      "#4f4e4e",
      "#225b41",
      "#661314",
      "#1495d1"
    ],
    fill: {
      type: "solid",
      color: [
        "#2aae7d",
        "#101010",
        "#c0af92",
        "#000000",
        "#004168",
        "#4f4e4e",
        "#225b41",
        "#661314",
        "#1495d1"
      ]
    },
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 1 },
    markers: { size: 0 },
    xaxis: {
      categories: [
        "2020-11-23 00:00:00",
        "2020-11-23 01:00:00",
        "2020-11-23 02:00:00",
        "2020-11-23 03:00:00",
        "2020-11-23 04:00:00",
        "2020-11-23 05:00:00",
        "2020-11-23 06:00:00",
        "2020-11-23 07:00:00",
        "2020-11-23 08:00:00",
        "2020-11-23 09:00:00",
        "2020-11-23 10:00:00",
        "2020-11-23 11:00:00",
        "2020-11-23 12:00:00",
        "2020-11-23 13:00:00",
        "2020-11-23 14:00:00",
        "2020-11-23 15:00:00",
        "2020-11-23 16:00:00",
        "2020-11-23 17:00:00",
        "2020-11-23 18:00:00",
        "2020-11-23 19:00:00",
        "2020-11-23 20:00:00",
        "2020-11-23 21:00:00",
        "2020-11-23 22:00:00",
        "2020-11-23 23:00:00"
      ],
      type: "datetime",
      labels: {
        datetimeUTC: false
      }
    },
    yaxis: { labels: { style: { cssClass: "text-muted fill-color" } } }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  
//   calender   //

var mesos = [
  'Gener',
  'Febrer',
  'Març',
  'Abril',
  'Maig',
  'Juny',
  'Juliol',
  'Agost',
  'Septembre',
  'Octubre',
  'Novembre',
  'Desembre'
];

var dies = [
  'Diumenge',
  'Dilluns',
  'Dimarts',
  'Dimecres',
  'Dijous',
  'Divendres',
  'Dissabte'
];

var dies_abr = [
  'dg',
  'dl',
  'dm',
  'dc',
  'dj',
  'dv',
  'ds'
];

Number.prototype.pad = function(num) {
  var str = '';
  for(var i = 0; i < (num-this.toString().length); i++)
      str += '0';
  return str += this.toString();
}

function calendari(widget, data)
{

  var original = widget.getElementsByClassName('actiu')[0];

  if(typeof original === 'undefined')
  {
      original = document.createElement('table');
      original.setAttribute('data-actual',
          data.getFullYear() + '/' +
          data.getMonth().pad(2) + '/' +
          data.getDate().pad(2))
      widget.appendChild(original);
  }

  var diff = data - new Date(original.getAttribute('data-actual'));

  diff = new Date(diff).getMonth();

  var e = document.createElement('table');

  e.className = diff  === 0 ? 'amagat-esquerra' : 'amagat-dreta';
  e.innerHTML = '';

  widget.appendChild(e);

  e.setAttribute('data-actual',
                 data.getFullYear() + '/' +
                 data.getMonth().pad(2) + '/' +
                 data.getDate().pad(2))

  var fila = document.createElement('tr');
  var titol = document.createElement('th');
  titol.setAttribute('colspan', 7);

  var boto_prev = document.createElement('button');
  boto_prev.className = 'boto-prev';
  boto_prev.innerHTML = '&#9666;';

  var boto_next = document.createElement('button');
  boto_next.className = 'boto-next';
  boto_next.innerHTML = '&#9656;';

  titol.appendChild(boto_prev);
  titol.appendChild(document.createElement('span')).innerHTML = 
      mesos[data.getMonth()] + '<span class="any">' + data.getFullYear() + '</span>';

  titol.appendChild(boto_next);

  boto_prev.onclick = function() {
      data.setMonth(data.getMonth() - 1);
      calendari(widget, data);
  };

  boto_next.onclick = function() {
      data.setMonth(data.getMonth() + 1);
      calendari(widget, data);
  };

  fila.appendChild(titol);
  e.appendChild(fila);

  fila = document.createElement('tr');

  for(var i = 1; i < 7; i++)
  {
      fila.innerHTML += '<th>' + dies_abr[i] + '</th>';
  }

  fila.innerHTML += '<th>' + dies_abr[0] + '</th>';
  e.appendChild(fila);

  /* Obtinc el dia que va acabar el mes anterior */
  var inici_mes =
      new Date(data.getFullYear(), data.getMonth(), -1).getDay();

  var actual = new Date(data.getFullYear(),
      data.getMonth(),
      -inici_mes);

  /* 6 setmanes per cobrir totes les posiblitats
   *  Quedaria mes consistent alhora de mostrar molts mesos 
   *  en una quadricula */
  for(var s = 0; s < 6; s++)
  {
      var fila = document.createElement('tr');

      for(var d = 1; d < 8; d++)
      {
    var cela = document.createElement('td');
    var span = document.createElement('span');

    cela.appendChild(span);

          span.innerHTML = actual.getDate();

          if(actual.getMonth() !== data.getMonth())
              cela.className = 'fora';

          /* Si es avui el decorem */
          if(data.getDate() == actual.getDate() &&
       data.getMonth() == actual.getMonth())
  cela.className = 'avui';

    actual.setDate(actual.getDate()+1);
          fila.appendChild(cela);
      }

      e.appendChild(fila);
  }

  setTimeout(function() {
      e.className = 'actiu';
      original.className +=
      diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
  }, 20);

  original.className = 'inactiu';

  setTimeout(function() {
      var inactius = document.getElementsByClassName('inactiu');
      for(var i = 0; i < inactius.length; i++)
          widget.removeChild(inactius[i]);
  }, 1000);

}

calendari(document.getElementById('calendari'), new Date());

// Toggle event  // 

$(".toggle").click(function(){
  $(".sidebar") .toggle()
  $(".main").toggleClass("toggleclass")
})

