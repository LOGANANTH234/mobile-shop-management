/* ===================================================
   MobileSync Pro — Application Logic & Mock Data
   =================================================== */

'use strict';

// ===================================================
// MOCK DATA
// ===================================================

const MOCK_MOBILES = [
  { id:1, brand:'Samsung', model:'Galaxy S24 FE', imei1:'864532198765432', imei2:'864532198765433', ram:'8GB', storage:'256GB', color:'Graphite Black', purchasePrice:42000, sellingPrice:48999, supplier:'Reliance Digital', warranty:'1 Year', status:'In Stock' },
  { id:2, brand:'Apple', model:'iPhone 15 128GB', imei1:'353456789012345', imei2:'', ram:'6GB', storage:'128GB', color:'Midnight', purchasePrice:62000, sellingPrice:74999, supplier:'Mobile World Dist.', warranty:'1 Year', status:'In Stock' },
  { id:3, brand:'Redmi', model:'Note 13 Pro+', imei1:'867432190123456', imei2:'867432190123457', ram:'8GB', storage:'256GB', color:'Fusion Purple', purchasePrice:21000, sellingPrice:26999, supplier:'TechHub Distributors', warranty:'1 Year', status:'Sold' },
  { id:4, brand:'OnePlus', model:'Nord CE4 Lite', imei1:'869120456789012', imei2:'', ram:'8GB', storage:'128GB', color:'Super Silver', purchasePrice:18000, sellingPrice:22999, supplier:'S.K. Traders', warranty:'1 Year', status:'In Stock' },
  { id:5, brand:'Realme', model:'12 Pro+ 5G', imei1:'868756432109876', imei2:'868756432109877', ram:'12GB', storage:'256GB', color:'Navigator Beige', purchasePrice:28000, sellingPrice:34999, supplier:'Reliance Digital', warranty:'1 Year', status:'In Stock' },
  { id:6, brand:'Vivo', model:'V30 Pro 5G', imei1:'862345678901234', imei2:'', ram:'12GB', storage:'256GB', color:'Elegant Black', purchasePrice:32000, sellingPrice:39999, supplier:'Mobile World Dist.', warranty:'1 Year', status:'Returned' },
  { id:7, brand:'Samsung', model:'Galaxy A55 5G', imei1:'864100234567891', imei2:'864100234567892', ram:'8GB', storage:'128GB', color:'Awesome Navy', purchasePrice:24000, sellingPrice:29999, supplier:'TechHub Distributors', warranty:'1 Year', status:'In Stock' },
  { id:8, brand:'Redmi', model:'13 5G', imei1:'867899012345678', imei2:'', ram:'6GB', storage:'128GB', color:'Sea Green', purchasePrice:10500, sellingPrice:13499, supplier:'S.K. Traders', warranty:'1 Year', status:'In Stock' },
  { id:9, brand:'Apple', model:'iPhone 14 128GB', imei1:'352111234567891', imei2:'', ram:'6GB', storage:'128GB', color:'Starlight', purchasePrice:52000, sellingPrice:62999, supplier:'Mobile World Dist.', warranty:'1 Year', status:'Sold' },
  { id:10, brand:'OnePlus', model:'12R 5G', imei1:'869300123456789', imei2:'869300123456790', ram:'16GB', storage:'256GB', color:'Iron Gray', purchasePrice:37000, sellingPrice:43999, supplier:'Reliance Digital', warranty:'1 Year', status:'In Stock' },
];

const MOCK_ACCESSORIES = [
  { id:1, product:'Samsung 25W USB-C Fast Charger', category:'Charger', brand:'Samsung', qty:2, purchasePrice:550, sellingPrice:999, status:'Low Stock' },
  { id:2, product:'boAt Airdopes 141 TWS', category:'TWS', brand:'boAt', qty:15, purchasePrice:750, sellingPrice:1299, status:'In Stock' },
  { id:3, product:'Anker USB-C to USB-C Cable 1M', category:'USB Cable', brand:'Anker', qty:24, purchasePrice:180, sellingPrice:349, status:'In Stock' },
  { id:4, product:'MI 10000mAh Power Bank', category:'Power Bank', brand:'Xiaomi', qty:8, purchasePrice:750, sellingPrice:1199, status:'In Stock' },
  { id:5, product:'Realme 65W SUPERVOOC Charger', category:'Charger', brand:'Realme', qty:4, purchasePrice:700, sellingPrice:1299, status:'Low Stock' },
  { id:6, product:'Apple Lightning Cable 1M (OEM)', category:'USB Cable', brand:'Apple', qty:3, purchasePrice:400, sellingPrice:799, status:'Low Stock' },
  { id:7, product:'Tempered Glass Screen Protector 6.7"', category:'Screen Protector', brand:'Generic', qty:7, purchasePrice:60, sellingPrice:149, status:'Low Stock' },
  { id:8, product:'Spigen Liquid Air Case for iPhone 15', category:'Phone Case', brand:'Spigen', qty:12, purchasePrice:450, sellingPrice:999, status:'In Stock' },
  { id:9, product:'Sony WH-1000XM5 Headphones', category:'Earphone', brand:'Sony', qty:3, purchasePrice:18000, sellingPrice:26990, status:'In Stock' },
  { id:10, product:'boAt Rockerz 255 Pro+', category:'Earphone', brand:'boAt', qty:5, purchasePrice:650, sellingPrice:1199, status:'Low Stock' },
];

const MOCK_CUSTOMERS = [
  { id:1, name:'Ravi Kumar', mobile:'+91 98765 43210', address:'Anna Nagar, Chennai', totalPurchases:'₹92,000', pending:'₹0', lastPurchase:'01 Oct 2026' },
  { id:2, name:'Priya Sharma', mobile:'+91 98123 45678', address:'T Nagar, Chennai', totalPurchases:'₹8,500', pending:'₹0', lastPurchase:'01 Oct 2026' },
  { id:3, name:'Karthik Murugan', mobile:'+91 87654 32109', address:'Velachery, Chennai', totalPurchases:'₹45,000', pending:'₹15,000', lastPurchase:'30 Sep 2026' },
  { id:4, name:'Anitha Devi', mobile:'+91 76543 21098', address:'Tambaram, Chennai', totalPurchases:'₹12,750', pending:'₹2,750', lastPurchase:'01 Oct 2026' },
  { id:5, name:'Suresh Pillai', mobile:'+91 65432 10987', address:'Porur, Chennai', totalPurchases:'₹56,000', pending:'₹0', lastPurchase:'01 Oct 2026' },
  { id:6, name:'Lakshmi Nair', mobile:'+91 94321 09876', address:'Vadapalani, Chennai', totalPurchases:'₹29,990', pending:'₹29,990', lastPurchase:'28 Sep 2026' },
  { id:7, name:'Vikram Reddy', mobile:'+91 93210 98765', address:'Adyar, Chennai', totalPurchases:'₹1,14,000', pending:'₹76,750', lastPurchase:'25 Sep 2026' },
];

const MOCK_SUPPLIERS = [
  { id:1, name:'Rajesh Kumar', contact:'+91 98765 11111', company:'Reliance Digital Wholesale', totalPurchases:'₹8,40,000', paid:'₹8,40,000', pending:'₹0' },
  { id:2, name:'Suresh Menon', contact:'+91 99876 22222', company:'Mobile World Distributors', totalPurchases:'₹5,20,000', paid:'₹4,80,000', pending:'₹40,000' },
  { id:3, name:'Pankaj Gupta', contact:'+91 77654 33333', company:'TechHub Distributors Pvt Ltd', totalPurchases:'₹3,20,000', paid:'₹2,80,000', pending:'₹40,000' },
  { id:4, name:'Arjun Singh', contact:'+91 88765 44444', company:'S.K. Traders & Co.', totalPurchases:'₹1,80,000', paid:'₹1,74,000', pending:'₹6,000' },
];

const MOCK_PURCHASES = [
  { id:1, invoiceNo:'PUR-0088', supplier:'Reliance Digital', date:'01 Oct 2026', items:5, total:'₹1,20,000', paid:'₹1,20,000', pending:'₹0', status:'Paid' },
  { id:2, invoiceNo:'PUR-0087', supplier:'Mobile World Dist.', date:'30 Sep 2026', items:12, total:'₹45,600', paid:'₹30,000', pending:'₹15,600', status:'Partial' },
  { id:3, invoiceNo:'PUR-0086', supplier:'TechHub Distributors', date:'29 Sep 2026', items:8, total:'₹32,000', paid:'₹0', pending:'₹32,000', status:'Pending' },
  { id:4, invoiceNo:'PUR-0085', supplier:'S.K. Traders', date:'28 Sep 2026', items:20, total:'₹18,500', paid:'₹18,500', pending:'₹0', status:'Paid' },
  { id:5, invoiceNo:'PUR-0084', supplier:'Reliance Digital', date:'25 Sep 2026', items:3, total:'₹92,000', paid:'₹92,000', pending:'₹0', status:'Paid' },
  { id:6, invoiceNo:'PUR-0083', supplier:'Mobile World Dist.', date:'22 Sep 2026', items:15, total:'₹28,500', paid:'₹28,500', pending:'₹0', status:'Paid' },
];

const MOCK_SALES = [
  { id:1, invoiceNo:'INV-0142', date:'01 Oct 2026', customer:'Ravi Kumar', items:1, total:'₹22,000', method:'UPI', status:'Paid' },
  { id:2, invoiceNo:'INV-0141', date:'01 Oct 2026', customer:'Priya Sharma', items:3, total:'₹8,500', method:'Card', status:'Paid' },
  { id:3, invoiceNo:'INV-0140', date:'01 Oct 2026', customer:'Karthik M', items:1, total:'₹15,000', method:'Cash', status:'Paid' },
  { id:4, invoiceNo:'INV-0139', date:'01 Oct 2026', customer:'Anitha Devi', items:2, total:'₹2,750', method:'Credit', status:'Pending' },
  { id:5, invoiceNo:'INV-0138', date:'01 Oct 2026', customer:'Suresh P', items:1, total:'₹12,000', method:'UPI', status:'Paid' },
  { id:6, invoiceNo:'INV-0137', date:'30 Sep 2026', customer:'Walk-in Customer', items:2, total:'₹3,148', method:'Cash', status:'Paid' },
  { id:7, invoiceNo:'INV-0136', date:'30 Sep 2026', customer:'Vikram Reddy', items:1, total:'₹43,999', method:'Card', status:'Paid' },
  { id:8, invoiceNo:'INV-0135', date:'29 Sep 2026', customer:'Lakshmi Nair', items:1, total:'₹29,990', method:'Credit', status:'Pending' },
];

const MOCK_EXPENSES = [
  { id:1, date:'01 Oct 2026', category:'Electricity', description:'Monthly electricity bill - October', amount:'₹3,200', method:'Bank Transfer' },
  { id:2, date:'01 Oct 2026', category:'Transport', description:'Auto-rickshaw fare for parcel delivery', amount:'₹200', method:'Cash' },
  { id:3, date:'30 Sep 2026', category:'Salary', description:'Staff salary - Ramesh (Sep 2026)', amount:'₹18,000', method:'Bank Transfer' },
  { id:4, date:'29 Sep 2026', category:'Maintenance', description:'Shop AC servicing', amount:'₹1,500', method:'Cash' },
  { id:5, date:'25 Sep 2026', category:'Rent', description:'Shop rent - October 2026', amount:'₹15,000', method:'Bank Transfer' },
  { id:6, date:'20 Sep 2026', category:'Other', description:'Stationery and printing expenses', amount:'₹850', method:'Cash' },
];

// ===================================================
// GLOBAL STATE
// ===================================================
let cartItems = [];
let currentPaymentMethod = 'cash';
let purchaseItems = [];
let salesChartInstance = null;
let chartsInitialized = {};
const INVOICE_NUM = { sales: 143, purchases: 89 };

// ===================================================
// NAVIGATION
// ===================================================
const pageConfig = {
  dashboard: { title: 'Dashboard', breadcrumb: 'Home / Dashboard' },
  inventory: { title: 'Inventory Management', breadcrumb: 'Home / Inventory' },
  purchases: { title: 'Purchase Management', breadcrumb: 'Home / Purchases' },
  sales: { title: 'Sales & Billing (POS)', breadcrumb: 'Home / Sales & Billing' },
  customers: { title: 'Customer Management', breadcrumb: 'Home / Customers' },
  suppliers: { title: 'Supplier Management', breadcrumb: 'Home / Suppliers' },
  expenses: { title: 'Expense Management', breadcrumb: 'Home / Expenses' },
  reports: { title: 'Reports & Analytics', breadcrumb: 'Home / Reports' },
  settings: { title: 'Settings', breadcrumb: 'Home / Settings' },
};

function navigate(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.remove('active');
    n.removeAttribute('aria-current');
  });

  // Show selected
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  const navEl = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navEl) {
    navEl.classList.add('active');
    navEl.setAttribute('aria-current', 'page');
  }

  const config = pageConfig[page];
  if (config) {
    document.getElementById('page-title').textContent = config.title;
    document.getElementById('page-breadcrumb').textContent = config.breadcrumb;
    document.title = `${config.title} — MobileSync Pro`;
  }

  // Initialize page-specific content
  if (page === 'dashboard' && !chartsInitialized.dashboard) {
    initDashboardCharts();
    chartsInitialized.dashboard = true;
  }
  if (page === 'reports') {
    initReportCharts();
  }
  if (page === 'inventory') renderInventoryTables();
  if (page === 'purchases') renderPurchaseHistory();
  if (page === 'sales') renderSalesHistory();
  if (page === 'customers') renderCustomers();
  if (page === 'suppliers') renderSuppliers();
  if (page === 'expenses') renderExpenses();

  window.scrollTo(0, 0);
}

// ===================================================
// TAB SWITCHING
// ===================================================
function switchTab(prefix, name) {
  const allTabs = document.querySelectorAll(`[data-tab^="${prefix}-"]`);
  const allContents = document.querySelectorAll(`[id^="${prefix}-"]`);

  allTabs.forEach(t => t.classList.remove('active'));
  allContents.forEach(c => { if (c.classList.contains('tab-content')) c.classList.remove('active'); });

  const targetBtn = document.querySelector(`[data-tab="${prefix}-${name}"]`);
  const targetContent = document.getElementById(`${prefix}-${name}`);
  if (targetBtn) targetBtn.classList.add('active');
  if (targetContent) targetContent.classList.add('active');
}

// ===================================================
// RENDER TABLES
// ===================================================

function renderInventoryTables() {
  renderMobilesTable(MOCK_MOBILES);
  renderAccessoriesTable(MOCK_ACCESSORIES);
}

function renderMobilesTable(data) {
  const tbody = document.getElementById('mobiles-tbody');
  if (!tbody) return;
  tbody.innerHTML = data.map(m => `
    <tr>
      <td>${m.brand} ${m.model}</td>
      <td>${m.brand}</td>
      <td>${m.model}</td>
      <td><span class="mono">${m.imei1}</span></td>
      <td><span class="mono">${m.imei2 || '—'}</span></td>
      <td>${m.ram}</td>
      <td>${m.storage}</td>
      <td>${m.color}</td>
      <td>₹${m.purchasePrice.toLocaleString('en-IN')}</td>
      <td>₹${m.sellingPrice.toLocaleString('en-IN')}</td>
      <td>${m.supplier}</td>
      <td>${m.warranty}</td>
      <td>${getStatusBadge(m.status)}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-primary" onclick="showToast('Viewing ${m.brand} ${m.model}','info')">View</button>
          <button class="btn-sm btn-outline" onclick="showToast('Edit mode opened','info')">Edit</button>
        </div>
      </td>
    </tr>
  `).join('');
  document.getElementById('mobiles-count').textContent = `Showing ${data.length} of ${data.length} records`;
}

function renderAccessoriesTable(data) {
  const tbody = document.getElementById('accessories-tbody');
  if (!tbody) return;
  tbody.innerHTML = data.map(a => `
    <tr>
      <td>${a.product}</td>
      <td><span class="badge badge-blue">${a.category}</span></td>
      <td>${a.brand}</td>
      <td>${a.qty <= 5 ? `<span class="stock-critical">${a.qty}</span>` : a.qty <= 10 ? `<span class="stock-low">${a.qty}</span>` : a.qty}</td>
      <td>₹${a.purchasePrice.toLocaleString('en-IN')}</td>
      <td>₹${a.sellingPrice.toLocaleString('en-IN')}</td>
      <td>${a.status === 'Low Stock' ? '<span class="badge badge-yellow">Low Stock</span>' : '<span class="badge badge-green">In Stock</span>'}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="showToast('Edit mode opened','info')">Edit</button>
          <button class="btn-sm btn-danger" onclick="showToast('Item removed from inventory','warning')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderPurchaseHistory() {
  const tbody = document.getElementById('purchase-history-tbody');
  if (!tbody) return;
  tbody.innerHTML = MOCK_PURCHASES.map(p => `
    <tr>
      <td><span class="mono">${p.invoiceNo}</span></td>
      <td>${p.supplier}</td>
      <td>${p.date}</td>
      <td>${p.items}</td>
      <td>${p.total}</td>
      <td>${p.paid}</td>
      <td>${p.pending !== '₹0' ? `<span class="text-red">${p.pending}</span>` : '₹0'}</td>
      <td>${getStatusBadge(p.status)}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="viewPurchase('${p.invoiceNo}')">View</button>
          <button class="btn-sm btn-primary" onclick="showToast('Printing ${p.invoiceNo}...','info')">Print</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderSalesHistory() {
  const tbody = document.getElementById('sales-history-tbody');
  if (!tbody) return;
  tbody.innerHTML = MOCK_SALES.map(s => `
    <tr>
      <td><span class="mono">${s.invoiceNo}</span></td>
      <td>${s.date}</td>
      <td>${s.customer}</td>
      <td>${s.items}</td>
      <td>${s.total}</td>
      <td>${getMethodBadge(s.method)}</td>
      <td>${getStatusBadge(s.status)}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="viewBill('${s.invoiceNo}','${s.customer}','${s.total}','${s.method}','${s.status}','${s.date}')">View</button>
          <button class="btn-sm btn-primary" onclick="showToast('Printing ${s.invoiceNo}...','info')">Print</button>
          <button class="btn-sm btn-danger" onclick="showToast('Return request created','warning')">Return</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderCustomers() {
  const tbody = document.getElementById('customers-tbody');
  if (!tbody) return;
  tbody.innerHTML = MOCK_CUSTOMERS.map(c => `
    <tr>
      <td>${c.name}</td>
      <td>${c.mobile}</td>
      <td>${c.address}</td>
      <td>${c.totalPurchases}</td>
      <td>${c.pending !== '₹0' ? `<span class="text-red">${c.pending}</span>` : '<span class="text-green">₹0</span>'}</td>
      <td>${c.lastPurchase}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="showToast('Customer details: ${c.name}','info')">Details</button>
          <button class="btn-sm btn-primary" onclick="showToast('New bill for ${c.name}','info')">Bill</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderSuppliers() {
  const tbody = document.getElementById('suppliers-tbody');
  if (!tbody) return;
  tbody.innerHTML = MOCK_SUPPLIERS.map(s => `
    <tr>
      <td>${s.name}</td>
      <td>${s.contact}</td>
      <td>${s.company}</td>
      <td>${s.totalPurchases}</td>
      <td><span class="text-green">${s.paid}</span></td>
      <td>${s.pending !== '₹0' ? `<span class="text-red">${s.pending}</span>` : '<span class="text-green">₹0</span>'}</td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="showToast('Supplier details: ${s.name}','info')">Details</button>
          <button class="btn-sm btn-primary" onclick="navigate('purchases')">Purchase</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderExpenses() {
  const tbody = document.getElementById('expenses-tbody');
  if (!tbody) return;
  tbody.innerHTML = MOCK_EXPENSES.map(e => `
    <tr>
      <td>${e.date}</td>
      <td><span class="badge badge-purple">${e.category}</span></td>
      <td>${e.description}</td>
      <td>${e.amount}</td>
      <td><span class="badge badge-gray">${e.method}</span></td>
      <td>
        <div class="action-btns">
          <button class="btn-sm btn-outline" onclick="showToast('Edit expense','info')">Edit</button>
          <button class="btn-sm btn-danger" onclick="showToast('Expense deleted','warning')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ===================================================
// STATUS HELPERS
// ===================================================
function getStatusBadge(status) {
  const map = {
    'Paid': '<span class="badge badge-green">Paid</span>',
    'Pending': '<span class="badge badge-yellow">Pending</span>',
    'Partial': '<span class="badge badge-orange">Partial</span>',
    'In Stock': '<span class="badge badge-green">In Stock</span>',
    'Sold': '<span class="badge badge-blue">Sold</span>',
    'Returned': '<span class="badge badge-orange">Returned</span>',
    'Low Stock': '<span class="badge badge-yellow">Low Stock</span>',
  };
  return map[status] || `<span class="badge badge-gray">${status}</span>`;
}

function getMethodBadge(method) {
  const map = {
    'UPI': '<span class="badge badge-blue">UPI</span>',
    'Card': '<span class="badge badge-purple">Card</span>',
    'Cash': '<span class="badge badge-gray">Cash</span>',
    'Credit': '<span class="badge badge-orange">Credit</span>',
  };
  return map[method] || `<span class="badge badge-gray">${method}</span>`;
}

// ===================================================
// CHARTS — DASHBOARD
// ===================================================
function initDashboardCharts() {
  const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekSales = [32000, 45000, 28000, 62000, 55000, 78000, 48250];
  const weekPurchases = [20000, 30000, 18000, 42000, 35000, 50000, 32000];

  const ctx = document.getElementById('salesChart');
  if (!ctx) return;

  salesChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: weekLabels,
      datasets: [
        {
          label: 'Sales',
          data: weekSales,
          backgroundColor: 'rgba(47, 129, 247, 0.7)',
          borderColor: '#2f81f7',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
        },
        {
          label: 'Purchases',
          data: weekPurchases,
          backgroundColor: 'rgba(188, 140, 255, 0.5)',
          borderColor: '#bc8cff',
          borderWidth: 2,
          borderRadius: 6,
          borderSkipped: false,
        },
      ],
    },
    options: chartDefaults({
      plugins: { legend: { display: true, labels: { color: '#8b949e', boxWidth: 12 } } }
    }),
  });
}

function toggleChart(period) {
  document.getElementById('chart-week').classList.toggle('active', period === 'week');
  document.getElementById('chart-month').classList.toggle('active', period === 'month');

  if (!salesChartInstance) return;

  if (period === 'week') {
    salesChartInstance.data.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    salesChartInstance.data.datasets[0].data = [32000, 45000, 28000, 62000, 55000, 78000, 48250];
    salesChartInstance.data.datasets[1].data = [20000, 30000, 18000, 42000, 35000, 50000, 32000];
  } else {
    salesChartInstance.data.labels = ['Sep 1','Sep 7','Sep 14','Sep 21','Sep 28','Oct 1'];
    salesChartInstance.data.datasets[0].data = [180000, 220000, 198000, 285000, 310000, 324850];
    salesChartInstance.data.datasets[1].data = [120000, 150000, 140000, 190000, 200000, 218500];
  }
  salesChartInstance.update();
}

// ===================================================
// CHARTS — REPORTS
// ===================================================
function initReportCharts() {
  initChartIfNeeded('reportSalesChart', () => new Chart(document.getElementById('reportSalesChart'), {
    type: 'line',
    data: {
      labels: ['Sep 25', 'Sep 26', 'Sep 27', 'Sep 28', 'Sep 29', 'Sep 30', 'Oct 01'],
      datasets: [{
        label: 'Daily Sales (₹)',
        data: [42000, 58000, 35000, 71000, 62000, 89000, 48250],
        borderColor: '#2f81f7',
        backgroundColor: 'rgba(47, 129, 247, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#2f81f7',
        pointRadius: 4,
      }],
    },
    options: chartDefaults({}),
  }));

  initChartIfNeeded('topProductsChart', () => new Chart(document.getElementById('topProductsChart'), {
    type: 'doughnut',
    data: {
      labels: ['Samsung Galaxy', 'Apple iPhone', 'Redmi Note', 'OnePlus Nord', 'Accessories'],
      datasets: [{
        data: [35, 28, 20, 10, 7],
        backgroundColor: ['#2f81f7','#3fb950','#bc8cff','#f97316','#39c5cf'],
        borderWidth: 0,
        hoverOffset: 6,
      }],
    },
    options: {
      ...chartDefaults({}),
      cutout: '65%',
      plugins: { legend: { display: true, position: 'right', labels: { color: '#8b949e', boxWidth: 10, padding: 12 } } },
    },
  }));

  initChartIfNeeded('purchaseReportChart', () => new Chart(document.getElementById('purchaseReportChart'), {
    type: 'bar',
    data: {
      labels: ['Sep 01','Sep 05','Sep 10','Sep 15','Sep 20','Sep 25','Oct 01'],
      datasets: [{
        label: 'Purchase Amount (₹)',
        data: [55000, 82000, 45000, 120000, 68000, 92000, 32000],
        backgroundColor: 'rgba(188, 140, 255, 0.7)',
        borderColor: '#bc8cff',
        borderWidth: 2,
        borderRadius: 6,
      }],
    },
    options: chartDefaults({}),
  }));

  initChartIfNeeded('stockCategoryChart', () => new Chart(document.getElementById('stockCategoryChart'), {
    type: 'doughnut',
    data: {
      labels: ['Mobile Phones', 'Chargers', 'Cables', 'TWS/Earphones', 'Power Banks', 'Cases/Covers'],
      datasets: [{
        data: [520, 210, 180, 145, 95, 134],
        backgroundColor: ['#2f81f7','#3fb950','#e3b341','#bc8cff','#f97316','#39c5cf'],
        borderWidth: 0,
      }],
    },
    options: {
      ...chartDefaults({}),
      cutout: '60%',
      plugins: { legend: { display: true, position: 'right', labels: { color: '#8b949e', boxWidth: 10, padding: 12 } } },
    },
  }));

  initChartIfNeeded('brandStockChart', () => new Chart(document.getElementById('brandStockChart'), {
    type: 'bar',
    data: {
      labels: ['Samsung', 'Apple', 'Redmi', 'Realme', 'OnePlus', 'Vivo', 'Others'],
      datasets: [{
        label: 'Units in Stock',
        data: [145, 82, 110, 98, 67, 55, 43],
        backgroundColor: ['#2f81f7','#3fb950','#f97316','#bc8cff','#39c5cf','#e3b341','#8b949e'],
        borderRadius: 6,
        borderWidth: 0,
      }],
    },
    options: { ...chartDefaults({}), plugins: { legend: { display: false } } },
  }));

  initChartIfNeeded('profitChart', () => new Chart(document.getElementById('profitChart'), {
    type: 'bar',
    data: {
      labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [
        {
          label: 'Sales',
          data: [280000, 320000, 295000, 380000, 342000, 420000, 324850],
          backgroundColor: 'rgba(47, 129, 247, 0.7)',
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          label: 'Purchase Cost',
          data: [190000, 215000, 200000, 260000, 230000, 290000, 218500],
          backgroundColor: 'rgba(255, 77, 79, 0.5)',
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          label: 'Net Profit',
          data: [50000, 65000, 52000, 78000, 68000, 88000, 63850],
          backgroundColor: 'rgba(63, 185, 80, 0.7)',
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    },
    options: { ...chartDefaults({}), plugins: { legend: { display: true, labels: { color: '#8b949e', boxWidth: 12 } } } },
  }));

  initChartIfNeeded('paymentChart', () => new Chart(document.getElementById('paymentChart'), {
    type: 'doughnut',
    data: {
      labels: ['Cash', 'UPI', 'Card', 'Credit'],
      datasets: [{
        data: [124500, 98200, 62150, 40000],
        backgroundColor: ['#3fb950','#2f81f7','#bc8cff','#f97316'],
        borderWidth: 0,
        hoverOffset: 8,
      }],
    },
    options: {
      ...chartDefaults({}),
      cutout: '60%',
      plugins: { legend: { display: true, position: 'right', labels: { color: '#8b949e', boxWidth: 12, padding: 16 } } },
    },
  }));
}

function initChartIfNeeded(canvasId, fn) {
  if (!chartsInitialized[canvasId]) {
    const el = document.getElementById(canvasId);
    if (el) {
      fn();
      chartsInitialized[canvasId] = true;
    }
  }
}

function chartDefaults(overrides = {}) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e2635',
        titleColor: '#e6edf3',
        bodyColor: '#8b949e',
        borderColor: '#30363d',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: ctx => {
            const v = ctx.parsed.y !== undefined ? ctx.parsed.y : ctx.parsed;
            return typeof v === 'number' ? ` ₹${v.toLocaleString('en-IN')}` : ` ${v}`;
          },
        },
      },
    },
    scales: {
      x: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 11 } } },
      y: { grid: { color: '#21262d' }, ticks: { color: '#8b949e', font: { size: 11 }, callback: v => `₹${(v/1000).toFixed(0)}k` } },
    },
    ...overrides,
  };
}

// ===================================================
// MODALS
// ===================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.showModal();
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.close();
}

// Close modal on backdrop click
document.addEventListener('click', e => {
  if (e.target.tagName === 'DIALOG') {
    e.target.close();
  }
});

// ===================================================
// TOAST NOTIFICATIONS
// ===================================================
function showToast(message, type = 'info', duration = 3500) {
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: '💡' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '💡'}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="removeToast(this.parentElement)" aria-label="Dismiss">✕</button>
  `;
  container.appendChild(toast);

  setTimeout(() => removeToast(toast), duration);
}

function removeToast(el) {
  if (!el || !el.parentNode) return;
  el.classList.add('leaving');
  setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
}

// ===================================================
// PURCHASE FORM
// ===================================================
function toggleIMEIFields() {
  const product = document.getElementById('pur-product').value;
  const f1 = document.getElementById('imei-field-1');
  const f2 = document.getElementById('imei-field-2');
  if (f1) f1.style.display = product === 'mobile' ? '' : 'none';
  if (f2) f2.style.display = product === 'mobile' ? '' : 'none';
}

function updatePurchaseSummary() {
  const qty = parseFloat(document.getElementById('pur-qty')?.value) || 0;
  const price = parseFloat(document.getElementById('pur-price')?.value) || 0;
  const gst = parseFloat(document.getElementById('pur-gst')?.value) || 0;
  const discount = parseFloat(document.getElementById('pur-discount')?.value) || 0;

  const subtotal = qty * price;
  const gstAmt = (subtotal * gst) / 100;
  const total = subtotal - discount + gstAmt;

  setEl('sum-subtotal', `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('sum-discount', `- ₹${discount.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('sum-gst', `+ ₹${gstAmt.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('sum-total', `₹${total.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('inv-total', `₹${total.toLocaleString('en-IN', {minimumFractionDigits:2})}`);

  const supplier = document.getElementById('pur-supplier')?.value;
  setEl('inv-supplier', supplier === 'Select Supplier' ? '—' : supplier);
}

function addPurchaseItem() {
  const model = document.getElementById('pur-model')?.value;
  const brand = document.getElementById('pur-brand')?.value;
  const imei1 = document.getElementById('pur-imei1')?.value;
  const qty = document.getElementById('pur-qty')?.value || 1;
  const price = parseFloat(document.getElementById('pur-price')?.value) || 0;
  const gst = parseFloat(document.getElementById('pur-gst')?.value) || 0;

  if (!model || !brand || brand === 'Select Brand') {
    showToast('Please fill in Brand and Model', 'warning');
    return;
  }

  const gstAmt = (price * qty * gst) / 100;
  const total = price * qty + gstAmt;

  const item = { product: `${brand} ${model}`, imei1, qty, price, gst: `${gst}%`, total };
  purchaseItems.push(item);
  renderPurchaseItems();
  showToast(`${brand} ${model} added to purchase list`, 'success');
}

function renderPurchaseItems() {
  const tbody = document.getElementById('purchase-items-tbody');
  if (!tbody) return;
  if (purchaseItems.length === 0) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="7"><div class="empty-state small">No items added yet</div></td></tr>`;
    return;
  }
  tbody.innerHTML = purchaseItems.map((item, i) => `
    <tr>
      <td>${item.product}</td>
      <td><span class="mono">${item.imei1 || '—'}</span></td>
      <td>${item.qty}</td>
      <td>₹${item.price.toLocaleString('en-IN')}</td>
      <td>${item.gst}</td>
      <td>₹${item.total.toLocaleString('en-IN', {minimumFractionDigits:2})}</td>
      <td><button class="btn-sm btn-danger" onclick="removePurchaseItem(${i})">✕</button></td>
    </tr>
  `).join('');
}

function removePurchaseItem(index) {
  purchaseItems.splice(index, 1);
  renderPurchaseItems();
}

function savePurchase() {
  if (purchaseItems.length === 0) {
    showToast('Add at least one item before saving', 'warning');
    return;
  }
  const supplier = document.getElementById('pur-supplier')?.value;
  if (supplier === 'Select Supplier') {
    showToast('Please select a supplier', 'warning');
    return;
  }
  showToast(`Purchase PUR-00${INVOICE_NUM.purchases} saved successfully!`, 'success');
  INVOICE_NUM.purchases++;
  purchaseItems = [];
  renderPurchaseItems();
  updatePurchaseSummary();
}

function viewPurchase(inv) {
  showToast(`Opening purchase: ${inv}`, 'info');
}

// ===================================================
// POS / BILLING
// ===================================================
const POS_PRODUCTS = [
  { name: 'Samsung Galaxy A55 5G', imei: '864100234567893', price: 28999 },
  { name: 'Samsung Galaxy S24 FE', imei: '864532198765432', price: 48999 },
  { name: 'Redmi 13 5G', imei: '867899012345679', price: 13499 },
  { name: 'Redmi Note 13 Pro+', imei: '867432190123458', price: 26999 },
  { name: 'OnePlus Nord CE4 Lite', imei: '869120456789013', price: 22999 },
  { name: 'OnePlus 12R 5G', imei: '869300123456791', price: 43999 },
  { name: 'Apple iPhone 15 128GB', imei: '353456789012346', price: 74999 },
  { name: 'Realme 12 Pro+ 5G', imei: '868756432109878', price: 34999 },
  { name: 'Samsung 25W Charger', imei: 'N/A', price: 999 },
  { name: 'boAt Airdopes 141 TWS', imei: 'N/A', price: 1299 },
  { name: 'USB-C Cable 1M', imei: 'N/A', price: 299 },
  { name: 'MI 10000mAh Power Bank', imei: 'N/A', price: 1199 },
];

function posSearch() {
  const nameQ = document.getElementById('pos-search-name')?.value.toLowerCase() || '';
  const modelQ = document.getElementById('pos-search-model')?.value.toLowerCase() || '';
  const imeiQ = document.getElementById('pos-search-imei')?.value.toLowerCase() || '';

  if (!nameQ && !modelQ && !imeiQ) {
    document.getElementById('pos-search-results').innerHTML = '';
    return;
  }

  const results = POS_PRODUCTS.filter(p =>
    (nameQ && p.name.toLowerCase().includes(nameQ)) ||
    (modelQ && p.name.toLowerCase().includes(modelQ)) ||
    (imeiQ && p.imei.toLowerCase().includes(imeiQ))
  );

  const container = document.getElementById('pos-search-results');
  if (results.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted);font-size:12px;">No products found</span>';
  } else {
    container.innerHTML = results.map(p => `
      <div class="pos-result-item" onclick="addToCart('${p.name.replace(/'/g,"\\'")}','${p.imei}',${p.price})">
        <strong>${p.name}</strong><br>
        <small>${p.imei !== 'N/A' ? 'IMEI: ' + p.imei : 'Accessory'} — ₹${p.price.toLocaleString('en-IN')}</small>
      </div>
    `).join('');
  }
}

function addToCart(name, imei, price) {
  // Check if already in cart
  const existing = cartItems.find(i => i.name === name && i.imei === imei);
  if (existing) {
    existing.qty++;
    existing.total = existing.qty * existing.price;
  } else {
    cartItems.push({ name, imei, qty: 1, price, discount: 0, gst: 18, total: price });
  }
  renderCart();
  showToast(`${name} added to bill`, 'success');
  document.getElementById('pos-search-results').innerHTML = '';
  document.getElementById('pos-search-name').value = '';
  document.getElementById('pos-search-model').value = '';
  document.getElementById('pos-search-imei').value = '';
}

function addQuickProduct(name, imei, priceStr, price) {
  addToCart(name, imei, price);
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCart();
}

function clearCart() {
  cartItems = [];
  renderCart();
}

function renderCart() {
  const tbody = document.getElementById('cart-tbody');
  if (!tbody) return;

  if (cartItems.length === 0) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="8"><div class="empty-state small">No items in cart. Search and add products above.</div></td></tr>`;
    updatePOSSummary();
    return;
  }

  tbody.innerHTML = cartItems.map((item, i) => {
    const gstAmt = (item.price * item.qty * item.gst) / 100;
    const total = item.qty * item.price - item.discount + gstAmt;
    return `
      <tr>
        <td>${item.name}</td>
        <td><span class="mono" style="font-size:11px">${item.imei}</span></td>
        <td>
          <input type="number" value="${item.qty}" min="1" style="width:50px;padding:3px 6px;background:var(--bg-input);border:1px solid var(--border-color);border-radius:6px;color:var(--text-primary);text-align:center;"
            oninput="updateCartQty(${i}, this.value)">
        </td>
        <td>₹${item.price.toLocaleString('en-IN')}</td>
        <td>₹${item.discount}</td>
        <td>${item.gst}%</td>
        <td>₹${total.toLocaleString('en-IN', {minimumFractionDigits:2})}</td>
        <td><button class="btn-sm btn-danger" onclick="removeFromCart(${i})">✕</button></td>
      </tr>
    `;
  }).join('');

  updatePOSSummary();
}

function updateCartQty(index, value) {
  const qty = parseInt(value) || 1;
  cartItems[index].qty = qty;
  renderCart();
}

function updatePOSSummary() {
  let subtotal = 0;
  let gstTotal = 0;
  cartItems.forEach(item => {
    subtotal += item.price * item.qty;
    gstTotal += (item.price * item.qty * item.gst) / 100;
  });
  const grand = subtotal + gstTotal;

  setEl('pos-subtotal', `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('pos-discount', `- ₹0.00`);
  setEl('pos-gst', `+ ₹${gstTotal.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
  setEl('pos-grand', `₹${grand.toLocaleString('en-IN', {minimumFractionDigits:2})}`);
}

function calcBalance() {
  const grandStr = document.getElementById('pos-grand')?.textContent || '₹0.00';
  const grand = parseFloat(grandStr.replace(/[₹,]/g, '')) || 0;
  const paid = parseFloat(document.getElementById('pos-paid')?.value) || 0;
  const balance = paid - grand;

  const balEl = document.getElementById('pos-balance');
  if (balEl) {
    balEl.textContent = `₹${Math.abs(balance).toLocaleString('en-IN', {minimumFractionDigits:2})}`;
    balEl.className = balance >= 0 ? 'text-green' : 'text-red';
    balEl.textContent = (balance >= 0 ? '₹' : '- ₹') + Math.abs(balance).toLocaleString('en-IN', {minimumFractionDigits:2});
  }
}

function selectMethod(method) {
  currentPaymentMethod = method;
  document.querySelectorAll('.method-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`m-${method}`)?.classList.add('active');
}

function saveBill() {
  if (cartItems.length === 0) {
    showToast('Add items to cart before saving', 'warning');
    return;
  }
  const customer = document.getElementById('cust-name')?.value || 'Walk-in Customer';
  const inv = `INV-0${INVOICE_NUM.sales}`;
  INVOICE_NUM.sales++;
  showToast(`Bill ${inv} saved for ${customer}!`, 'success');
  cartItems = [];
  renderCart();
  document.getElementById('cust-name').value = '';
  document.getElementById('cust-mobile').value = '';
  document.getElementById('cust-address').value = '';
  document.getElementById('pos-paid').value = '';
}

function printInvoice() {
  if (cartItems.length === 0) {
    showToast('Add items to cart before printing', 'warning');
    return;
  }
  showToast('Invoice sent to printer successfully!', 'info');
}

function viewBill(inv, customer, total, method, status, date) {
  const body = document.getElementById('view-bill-body');
  if (!body) return;
  body.innerHTML = `
    <div class="invoice-preview" style="max-width:100%;font-size:13px">
      <div class="inv-shop" style="font-size:20px">⭐ Star Sales</div>
      <div class="inv-sub">123, Main Street, Gandhi Nagar, Chennai - 600020</div>
      <div class="inv-sub">Phone: +91 98765 43210 | GST: 33ABCDE1234F1Z5</div>
      <div class="inv-divider" style="margin:10px 0"></div>
      <div class="inv-row"><span><strong>Invoice No:</strong></span><span><strong>${inv}</strong></span></div>
      <div class="inv-row"><span>Date:</span><span>${date}</span></div>
      <div class="inv-row"><span>Customer:</span><span>${customer}</span></div>
      <div class="inv-row"><span>Payment:</span><span>${method}</span></div>
      <div class="inv-row"><span>Status:</span><span>${status}</span></div>
      <div class="inv-divider" style="margin:10px 0"></div>
      <table style="width:100%;font-size:12px;border-collapse:collapse">
        <tr style="background:#f5f5f5">
          <th style="text-align:left;padding:6px">Product</th>
          <th style="text-align:right;padding:6px">Qty</th>
          <th style="text-align:right;padding:6px">Price</th>
          <th style="text-align:right;padding:6px">Total</th>
        </tr>
        <tr>
          <td style="padding:6px">Demo Product</td>
          <td style="padding:6px;text-align:right">1</td>
          <td style="padding:6px;text-align:right">${total}</td>
          <td style="padding:6px;text-align:right">${total}</td>
        </tr>
      </table>
      <div class="inv-divider" style="margin:10px 0"></div>
      <div class="inv-row total-row"><span>Grand Total</span><span>${total}</span></div>
      <div style="text-align:center;margin-top:12px;color:#888;font-size:11px">
        Thank you for shopping with Star Sales! Visit again.
      </div>
    </div>
  `;
  openModal('view-bill-modal');
}

// ===================================================
// FORM SAVES (MOCK)
// ===================================================
function saveMobile() {
  const model = document.getElementById('m-model')?.value;
  const brand = document.getElementById('m-brand')?.value;
  if (!model) { showToast('Please enter the Model', 'warning'); return; }
  showToast(`${brand} ${model} added to inventory!`, 'success');
  closeModal('add-mobile-modal');
  document.getElementById('m-model').value = '';
  document.getElementById('m-imei1').value = '';
  document.getElementById('m-imei2').value = '';
}

function saveAdjustment() {
  const product = document.getElementById('adj-product')?.value;
  const type = document.getElementById('adj-type')?.value;
  if (!product) { showToast('Please enter a product name', 'warning'); return; }
  showToast(`Stock adjustment (${type}) saved!`, 'success');
  closeModal('stock-adjust-modal');
}

function saveCustomer() {
  const name = document.getElementById('nc-name')?.value;
  if (!name) { showToast('Please enter customer name', 'warning'); return; }
  showToast(`Customer "${name}" added!`, 'success');
  closeModal('add-customer-modal');
  document.getElementById('nc-name').value = '';
  document.getElementById('nc-mobile').value = '';
}

function saveSupplier() {
  const name = document.getElementById('ns-name')?.value;
  if (!name) { showToast('Please enter supplier name', 'warning'); return; }
  showToast(`Supplier "${name}" added!`, 'success');
  closeModal('add-supplier-modal');
}

function saveExpense() {
  const desc = document.getElementById('exp-desc')?.value;
  const amount = document.getElementById('exp-amount')?.value;
  if (!desc || !amount) { showToast('Please fill all required fields', 'warning'); return; }
  showToast(`Expense ₹${amount} saved!`, 'success');
  closeModal('add-expense-modal');
  document.getElementById('exp-desc').value = '';
  document.getElementById('exp-amount').value = '';
}

function simulateBackup() {
  showToast('Backup started...', 'info');
  setTimeout(() => showToast('✅ Backup completed! File saved to C:\\StarSales\\Backup\\', 'success'), 2000);
}

function setReportPeriod(period, btn) {
  document.querySelectorAll('.report-controls .btn-chip').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  showToast(`Report period set to: ${period}`, 'info');
}

// ===================================================
// THEME TOGGLE
// ===================================================
let currentTheme = 'dark'; // default

function applyTheme(theme, animate = false) {
  currentTheme = theme;
  const html = document.documentElement;
  const thumb = document.getElementById('theme-thumb');
  const label = document.getElementById('theme-label');

  html.setAttribute('data-theme', theme);

  if (thumb) thumb.textContent = theme === 'light' ? '☀️' : '🌙';
  if (label) label.textContent = theme === 'light' ? 'Light' : 'Dark';

  localStorage.setItem('mobilesync-theme', theme);

  // Update Chart.js tooltip & grid colors
  updateChartColors(theme);

  if (animate) {
    // Brief flash animation on body for polish
    document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  }
}

function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next, true);
  syncThemeCards(next);
  showToast(
    next === 'light' ? '☀️ Switched to Light Mode' : '🌙 Switched to Dark Mode',
    'info',
    2000
  );
}

function selectThemeCard(choice) {
  if (choice === 'system') {
    // Remove saved preference so system takes over
    localStorage.removeItem('mobilesync-theme');
    const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(sysDark ? 'dark' : 'light', true);
    showToast('💻 Following system theme preference', 'info', 2000);
  } else {
    applyTheme(choice, true);
    showToast(choice === 'light' ? '☀️ Light Mode activated' : '🌙 Dark Mode activated', 'info', 2000);
  }
  syncThemeCards(choice);
}

function syncThemeCards(activeKey) {
  // activeKey is 'dark' | 'light' | 'system'
  ['dark', 'light', 'system'].forEach(key => {
    const card  = document.getElementById(`theme-card-${key}`);
    const check = document.getElementById(`check-${key}`);
    const isActive = key === activeKey;
    if (card)  card.classList.toggle('active', isActive);
    if (check) check.style.opacity = isActive ? '1' : '0';
  });
}

function updateChartColors(theme) {
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#21262d' : '#e8ecf0';
  const tickColor = isDark ? '#8b949e' : '#57606a';
  const tooltipBg = isDark ? '#1e2635' : '#ffffff';
  const tooltipTitle = isDark ? '#e6edf3' : '#1a1f2e';
  const tooltipBody = isDark ? '#8b949e' : '#57606a';
  const tooltipBorder = isDark ? '#30363d' : '#d0d7de';

  // Update Chart.js global defaults
  if (window.Chart) {
    Chart.defaults.color = tickColor;
    Chart.defaults.borderColor = gridColor;
    Chart.defaults.plugins.tooltip.backgroundColor = tooltipBg;
    Chart.defaults.plugins.tooltip.titleColor = tooltipTitle;
    Chart.defaults.plugins.tooltip.bodyColor = tooltipBody;
    Chart.defaults.plugins.tooltip.borderColor = tooltipBorder;
  }

  // Re-draw all existing chart instances
  if (window.Chart && Chart.instances) {
    Object.values(Chart.instances).forEach(chart => {
      if (chart.options.scales) {
        Object.values(chart.options.scales).forEach(scale => {
          if (scale.grid) scale.grid.color = gridColor;
          if (scale.ticks) scale.ticks.color = tickColor;
        });
      }
      chart.update();
    });
  }
}

// ===================================================
// CLOCK
// ===================================================
function updateClock() {
  const now = new Date();
  const dateEl = document.getElementById('current-date');
  const timeEl = document.getElementById('current-time');
  if (dateEl) dateEl.textContent = now.toLocaleDateString('en-IN', { weekday:'short', day:'2-digit', month:'short', year:'numeric' });
  if (timeEl) timeEl.textContent = now.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
}

// ===================================================
// UTILITIES
// ===================================================
function setEl(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ===================================================
// INIT
// ===================================================
document.addEventListener('DOMContentLoaded', () => {

  // Theme init — localStorage → system preference → dark
  const savedTheme = localStorage.getItem('mobilesync-theme');
  const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initTheme = savedTheme || (sysDark ? 'dark' : 'light');
  applyTheme(initTheme);
  // Sync the appearance cards once DOM is ready (cards rendered on Settings nav)
  const initCardKey = savedTheme ? savedTheme : 'system';
  setTimeout(() => syncThemeCards(initCardKey), 100);


  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('mobilesync-theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Navigation clicks
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const page = item.getAttribute('data-page');
      if (page) navigate(page);
    });
  });

  // Sidebar toggle
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main-content');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const collapsed = sidebar.style.width === '72px';
      sidebar.style.width = collapsed ? 'var(--sidebar-width)' : '72px';
      main.style.marginLeft = collapsed ? 'var(--sidebar-width)' : '72px';
      sidebar.querySelectorAll('.nav-label, .logo-text, .sidebar-footer, .nav-section-label, .nav-badge').forEach(el => {
        el.style.display = collapsed ? '' : 'none';
      });
    });
  }

  // Hide IMEI fields initially
  toggleIMEIFields();

  // Clock
  updateClock();
  setInterval(updateClock, 30000);

  // Init dashboard on load
  navigate('dashboard');

  // Welcome toast
  setTimeout(() => showToast('Welcome to MobileSync Pro! Click any module to explore.', 'info', 5000), 800);
});
