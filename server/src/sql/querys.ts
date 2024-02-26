export const querys = {
  getResumeMonthSaleDetails: `
      SELECT
        LAST_DAY(createdAt) AS date,
        SUM(quantity * unit_price) AS total
      FROM
        saleorderdetail
      GROUP BY
        LAST_DAY(createdAt)
      ORDER BY
        date;
    `,
  getResumeDaySaleDetails: `
      SELECT
        DATE(createdAt) AS date,
        SUM(quantity * unit_price) AS total
      FROM
        saleorderdetail
      GROUP BY
        DATE(createdAt)
      ORDER BY
        date;
    `,
  getResumeYearSaleDetails: `
      SELECT
        LAST_DAY(createdAt) AS date,
        SUM(quantity * unit_price) AS total
      FROM
        saleorderdetail
      GROUP BY
        YEAR(createdAt)
      ORDER BY
        date;
    `,
  getResumeMonthPurchaseDetails: `
      SELECT
        LAST_DAY(createdAt) AS date,
        SUM(quantity * unit_cost) AS total
      FROM
        purchaseorderdetail
      GROUP BY
        LAST_DAY(createdAt)
      ORDER BY
        date;
    `,
  getResumeDayPurchaseDetails: `
      SELECT
        DATE(createdAt) AS date,
        SUM(quantity * unit_cost) AS total
      FROM
        purchaseorderdetail
      GROUP BY
        DATE(createdAt)
      ORDER BY
        date;
    `,
  getResumeYearPurchaseDetails: `
      SELECT
        LAST_DAY(createdAt) AS date,
        SUM(quantity * unit_cost) AS total
      FROM
        purchaseorderdetail
      GROUP BY
        YEAR(createdAt)
      ORDER BY
        date;
    `,
  getResumeYearInventoryTransitions: `
      SELECT 
        LAST_DAY(createdAt) AS date,
        sum((-quantity*unitPrice)-(-quantity*unitCostAvg)) as 'Gain'
      FROM crm.inventorytransaction 
      WHERE transactionTypeId = 2 
      GROUP BY YEAR(createdAt)
      ORDER BY date;
    `,
  getResumeMonthInventoryTransitions: `
      SELECT 
        LAST_DAY(createdAt) AS date,
        sum((-quantity*unitPrice)-(-quantity*unitCostAvg)) as 'Gain'
      FROM crm.inventorytransaction 
      WHERE transactionTypeId = 2 
      GROUP BY LAST_DAY(createdAt)
      ORDER BY date;
    `,
  getResumeDayInventoryTransitions: `
      SELECT 
        DATE(createdAt) AS date,
        sum((-quantity*unitPrice)-(-quantity*unitCostAvg)) as 'Gain'
      FROM crm.inventorytransaction 
      WHERE transactionTypeId = 2 
      GROUP BY DATE(createdAt)
      ORDER BY date;
    `,
};
