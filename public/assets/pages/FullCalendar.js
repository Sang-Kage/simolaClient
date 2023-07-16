class CalendarPage {
  constructor() {
    this.events = null;
    this.eventModal = document.getElementById("event-modal");
    this.modalTitle = document.getElementById("modal-title");
    this.currentEvent = null;
    this.calendar = null;
  }

  async loadData() {
    const colors = ['bg-primary', 'bg-danger', 'bg-warning', 'bg-success', 'bg-info'];
    document.getElementById('layar').style.display = '';
    const response = await fetch('https://api.simola.kampungmelonnapote.co.id/penyewaan');
    const data = await response.json();
    const result = data.data.data.map((item) => {
      return {
        title: item.kegiatan,
        start: item.tanggal_mulai,
        end: item.tanggal_selesai,
        classNames: [colors[Math.floor(Math.random() * colors.length)]],
      }
    })
    this.events = result;
    document.getElementById('layar').style.display = 'none';
  }


  async init() {
    
    await this.loadData();
    this.initializeCalendar(this.events);
  }
  initializeCalendar(events) {
    if (this.calendar) {
      this.calendar.destroy();
    }
    this.calendar = new FullCalendar.Calendar(
      document.getElementById("calendar"),
      {
        plugins: ["bootstrap", "interaction", "dayGrid", "timeGrid"],
        selectable: true,
        defaultView: "dayGridMonth",
        themeSystem: "bootstrap",
        header: {
          left: "prev,next, today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        // lang indonesia
        locale: "id",
        // button text
        buttonText: {
          today: "Hari Ini",
          month: "Bulan",
          week: "Minggu",
          day: "Hari",
          list: "Agenda",
        },
        timeFormat: "HH:mm",
        eventClick: (clickInfo) => {
          this.toggleModal();
          this.currentEvent = clickInfo.event;
          this.modalTitle.innerHTML = "Detail Kegiatan";
          document.getElementById("event-title").value = this.currentEvent.title;
          document.getElementById("tanggal_selesai").value = new Date(this.currentEvent.end).toISOString().slice(0, 16).split('T').join(' ');
          document.getElementById("tanggal_mulai").value = new Date(this.currentEvent.start).toISOString().slice(0, 16).split('T').join(' ');
          this.currentEvent = null;
        },
        select: (selectInfo) => {
          this.openModal(selectInfo);
        },
        events: this.events,
      }
    );
    this.calendar.render();
  }
  

  openModal(info) {
    this.showEventModal();
    this.modalTitle.textContent = "Detail Keiatan";
    document.getElementById('start_date').value = info.start;
    document.getElementById('end_date').value = info.end;
    this.currentEvent = info;
  }

  showEventModal() {
    this.toggleModal();
  }

  toggleModal() {
    document.getElementById('btn-new-event').click();
  }

  hideEventModal() {
    this.toggleModal();
  }

}


