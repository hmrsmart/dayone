(()=>{function e(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}$((function(a){var r;$("#hr-attendance").DataTable({order:[[0,"desc"]],columnDefs:[{bSortable:!1,targets:["_all"]}],language:{searchPlaceholder:"Search...",sSearch:""}}),$("#emp-attendance").DataTable((e(r={order:[[0,"asec"]]},"order",[]),e(r,"columnDefs",[{orderable:!1,targets:[5,6]}]),e(r,"language",{searchPlaceholder:"Search...",sSearch:""}),r)),$(".timepicker").timepicker({showInputs:!1}),$(".fc-datepicker").datepicker({dateFormat:"dd MM yy",monthNamesShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}),$(".fc-datepicker").datepicker("setDate","today"),$(".select2").select2({minimumResultsForSearch:1/0,width:"100%"})}))})();