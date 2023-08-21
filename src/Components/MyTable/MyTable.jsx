import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.css";
import "datatables.net";
import "datatables.net-responsive";

const MyTable = ({ data }) => {
  const tableRef = useRef(null);
  useEffect(() => {
    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      // Destroy the existing DataTable instance
      $(tableRef.current).DataTable().destroy();
    }
    const dataTable = $(tableRef.current).DataTable({
      responsive: true,
      data: data,
      columns: [
        { data: "seq", title: "Seq" },
        { data: "name", title: "Name" },
        { data: "position", title: "Position" },
        { data: "office", title: "Office" },
        { data: "startDate", title: "Start-date" },
        { data: "salary", title: "Salary" },
      ],
      columnDefs: [{ targets: "_all", orderable: true, type: "num" }],
      lengthMenu: [5, 10], // Length menu options
      pageLength: 10, // Default number of rows per page
    });

    // Search functionality
    // $("#searchInput").on("keyup", function () {
    //   dataTable.search(value).draw();
    // });
  }, [data]);
  return (
    <table ref={tableRef} className="display nowrap" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Seq</th>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Start Date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>{/* Data rows will be created automatically */}</tbody>
      <tfoot>
        <tr>
          <th>Seq</th>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Start Date</th>
          <th>Salary</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default MyTable;
// 01325873056
