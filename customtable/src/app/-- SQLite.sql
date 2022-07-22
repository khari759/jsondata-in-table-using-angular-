-- SQLite
SELECT 
EmployeeName,
sum(( EndTimeUtc - StarTimeUtc)/3600) AS total_work_time
FROM EmployeeTable 
GROUP BY EmployeeName;