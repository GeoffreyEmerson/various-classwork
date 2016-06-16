-- JOIN (any different from INNER JOIN?)
-- No apparent difference

SELECT *
FROM customers
JOIN orders
ON customers.customerid = orders.customerid ;

SELECT *
FROM customers
INNER JOIN orders
ON customers.customerid = orders.customerid ;


-- [3 points] JOIN data using three or more tables

SELECT customername,orderdate,firstname,shippername,productname,suppliername
FROM customers
JOIN orders
ON customers.customerid = orders.customerid
JOIN employees
ON orders.employeeid = employees.employeeid
JOIN orderdetails
ON orders.orderid = orderdetails.orderid
JOIN shippers
ON orders.shipperid = shippers.shipperid
JOIN products
ON orderdetails.productid = products.productid
JOIN suppliers
ON products.supplierid = suppliers.supplierid ;


-- LEFT JOIN (any different from LEFT OUTER JOIN?)
-- Looks the same!

SELECT *
FROM customers
JOIN orders
ON customers.customerid = orders.customerid ;

SELECT *
FROM customers
LEFT OUTER JOIN orders
ON customers.customerid = orders.customerid ;


-- RIGHT JOIN (any different from RIGHT OUTER JOIN?)
-- Looks the same!

SELECT *
FROM orders
RIGHT JOIN customers
ON customers.customerid = orders.customerid ;

SELECT *
FROM orders
RIGHT OUTER JOIN customers
ON customers.customerid = orders.customerid ;


-- FULL JOIN (any different from FULL OUTER JOIN?)
-- Looks the same!

SELECT *
FROM orders
LEFT JOIN customers
ON orders.customerid = customers.customerid
UNION
SELECT *
FROM orders
RIGHT JOIN customers
ON orders.customerid = customers.customerid ;

SELECT *
FROM orders
LEFT OUTER JOIN customers
ON orders.customerid = customers.customerid
UNION
SELECT *
FROM orders
RIGHT OUTER JOIN customers
ON orders.customerid = customers.customerid ;
