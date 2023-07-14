import { useState, useEffect, SetStateAction } from "react";
import UseApi from "./UseApi";
export default function usePagination(path: string, q?:string, query?: string) {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [result, setResult] = useState<any>([]);
  const [pageList, setPageList] = useState<any>([]);
  const [limitPage, setLimitPage] = useState(5);
  const [totalData, setTotalData] = useState(0);
  const [startNumber, setStartNumber] = useState(0);

  const { getResource } = UseApi();

  useEffect(() => {
    fetchData();
  }, []);

  async function nextPage() {
    setCurrentPage((prev) => prev + 1);
    if (currentPage < totalPage) {
    }
    await fetchData();
  }

  async function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    await fetchData();
  }

  async function goToPage(page: number) {
    if (page > 0 && page <= totalPage) {
      setCurrentPage(page);
    }
    await fetchData();
  }

  async function goToFirstPage() {
    setCurrentPage(1);
    await fetchData();
  }

  async function goToLastPage() {
    setCurrentPage(totalPage);
    await fetchData();
  }

  function generateButtons() {
    setPageList([]);
    if (currentPage > 3 && currentPage < totalPage - 1) {
      setPageList([currentPage - 1, currentPage, currentPage + 1]);
    } else if (currentPage > 3 && currentPage >= totalPage - 1) {
      setPageList([
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage
      ]);
    } else if (currentPage === 1 && currentPage === totalPage) {
      setPageList([1]);
    } else if (currentPage > 1 && currentPage === totalPage) {
      setPageList([totalPage - 1, totalPage]);
    } else if (totalPage <= 4) {
      for (let i = 1; i <= totalPage; i++) {
        setPageList((prevPageList: any) => [...prevPageList, i]);
      }
    } else {
      setPageList([1, 2, 3, 4]);
    }
  }

  async function fetchData() {
    let queryArr = [];
    if (q !== "") {
      queryArr.push(`${path}${q}&page=${currentPage}&limit=${limitPage}`);
    } else {
      queryArr.push(`${path}?page=${currentPage}&limit=${limitPage}`);
    }

    const response = await getResource(queryArr[0]);
    const data = response;
    setResult(data.data.data);
    setTotalPage(data.data.totalPage);
    setTotalData(data.data.totalRows);
    generateButtons();
    setStartNumber((currentPage - 1) * limitPage + 1);
  }

  async function search() {
    let searchArr = [];
    if (q !== "") {
      searchArr.push(
        `${path}${q}&page=${currentPage}&limit=${limitPage}&search=${query}`
      );
    } else {
      searchArr.push(
        `${path}?page=${currentPage}&limit=${limitPage}&search=${query}`
      );
    }
    const response = await getResource(searchArr[0]);
    const data = await response.json();
    setResult(data.data.data);
    setTotalPage(data.data.totalPage);
    setTotalData(data.data.totalRows);
    generateButtons();
    setStartNumber((currentPage - 1) * limitPage + 1);
  }

  function isLastPage() {
    return currentPage === totalPage;
  }

  async function changeLimit(limit: SetStateAction<number>) {
    setCurrentPage(1);
    setLimitPage(limit);
    await fetchData();
  }

  function isFirstPage() {
    return currentPage === 1;
  }

  return {
    result,
    startNumber,
    currentPage,
    totalPage,
    totalData,
    pageList,
    limitPage,
    changeLimit,
    nextPage,
    prevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
    search,
    isLastPage,
    isFirstPage,
    fetchData
  };
}
