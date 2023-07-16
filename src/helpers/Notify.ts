declare const alertify: any;

export default class Notify {
  static success(message: string): void {
    alertify.set('notifier', 'position', 'top-right')
    alertify.success(`<i class='fas fa-check-circle me-2'></i></br> ${message}`);
  }
  static error(message: string): void {
    alertify.set('notifier', 'position', 'top-right')
    alertify.error(`<i class='fas fa-times-circle me-2'></i></br>${message}`);
  }
  static warning(message: string): void {
    alertify.set('notifier', 'position', 'top-right')
    alertify.warning(message);
  }
  static info(message: string): void {
    alertify.set('notifier', 'position', 'top-right')
    alertify.message(`<i class='fas fa-info-circle me-2'></i></br>${message}`);
  }

  static confirm(message: string, callback?: any): void {
    alertify.defaults.glossary.title = 'Konfirmasi';
    alertify.defaults.glossary.ok = 'Ya';
    alertify.defaults.glossary.cancel = 'Tidak';
    alertify.confirm(message, callback);
  }
}