class CalendarPage {
  constructor() {
    this.events = null;
    this.eventModal = document.getElementById("event-modal");
    this.modalTitle = document.getElementById("modal-title");
    this.currentEvent = null;
    this.calendar = null;
  }

  init(events) {
    this.events = events;

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
          this.modalTitle.innerHTML = "Edit Event";
          document.getElementById("event-title").value = this.currentEvent.title;
          document.getElementById("event-category").value = this.currentEvent.classNames[0];
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
    this.modalTitle.textContent = "Add Event";
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


