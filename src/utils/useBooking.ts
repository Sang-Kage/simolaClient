import * as yup from 'yup';
import { useFormik } from 'formik';
import UseApi from '../composables/UseApi';
import moment from 'moment';
import Notify from '../helpers/Notify';
import { useNavigate } from 'react-router-dom';
export default function useBooking() {
  const navigate = useNavigate();
  const { postResourceFile, getResource, deleteResource } = UseApi();
  const formik: any = useFormik({
    validationSchema: yup.object({
      id: yup.string(),
      tanggal_pengajuan: yup.string(),
      penanggung_jawab: yup.string().required(),
      asal_surat: yup.string().required(),
      jenis_surat: yup.string().required(),
      type: yup.string(),
      tanggal_mulai: yup.date().required(),
      tanggal_selesai: yup.date().required(),
      kegiatan: yup.string().required(),
      lampiran: yup.mixed(),
    }),
    initialValues: {
      penanggung_jawab: '',
      asal_surat: '',
      jenis_surat: '',
      type: '',
      tanggal_mulai: '',
      tanggal_selesai: '',
      lampiran: '',
      kegiatan: ''
    },
    onSubmit: async (values, setFieldValue?: any) => {
      const result = formatedData(values);
      const response = await storeBooking(result);
      setFieldValue.resetForm();
      Notify.success(response.message);
      navigate('/penyewaan', { replace: true });
    }
  });

  const storeBooking = async (data: any) => {
    const response = data.id != '' && data.id != undefined ? await postResourceFile(`penyewaan/${data.id}`, data) : await postResourceFile('penyewaan', data);
    if(!response) {
      navigate('/penyewaan', {replace: true})
      return;
    }
    return response;
  };

  const getBookingById = async (id: string) => {
    const response = await getResource('/penyewaan/' + id);
    const result = {
      id: Number(id),
      tanggal_pengajuan: response.data.tanggal_pengajuan,
      penanggung_jawab: response.data.penanggung_jawab,
      asal_surat: response.data.asal_surat,
      jenis_surat: (response.data.type) + '-' + response.data.jenis_surat,
      tanggal_mulai: new Date(response.data.tanggal_mulai),
      tanggal_selesai: new Date(response.data.tanggal_selesai),
      kegiatan: response.data.kegiatan
    };
    return result;
  };

  const formatedData = (v: any) => {
    let result: any = {
      id: v.id != '' ? v.id : null,
      kegiatan: v.kegiatan,
      tanggal_pengajuan: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      penanggung_jawab: v.penanggung_jawab,
      asal_surat: v.asal_surat,
      jenis_surat: v.jenis_surat.split('-')[1],
      type: v.jenis_surat.split('-')[0],
      tanggal_mulai: moment(v.tanggal_mulai).format('YYYY-MM-DD HH:mm:ss'),
      tanggal_selesai: moment(v.tanggal_selesai).format('YYYY-MM-DD HH:mm:ss'),
    };
    
    if (typeof (v.lampiran) != 'string' && v.lampiran != undefined) {
      result.lampiran = v.lampiran;
    }
    return result;
  };

  async function deleteBooking(id: string) {
    await deleteResource(`penyewaan/${id}`);
  }

  return {
    formik,
    getBookingById,
    deleteBooking
  };
}