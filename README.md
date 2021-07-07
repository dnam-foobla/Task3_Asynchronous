# Asynchronous

### QUESTION 1: Bất đồng bộ trong NodeJS là gì?

Bình thường với các ngôn ngữ khác chúng ta sẽ có cơ chế đa luồng để đảm bảo xử lý nhiều tác vụ và tối ưu công việc. Tuy nhiên với JavaScript và NodeJS ta lại biết đến bất đồng bộ. Lúc này code sẽ vẫn chạy lần lượt từ trên xuống dưới do nó là thông dịch line-by-line. Tuy nhiên, nó sẽ có những lúc không đợi các dòng code i chạy xong mà cứ chạy tiếp dòng code i+1,i+2,...

### QUESTION 2: Callstack và event loop?

Callstack dĩ nhiên là một stack rồi, nó sẽ chạy code và đẩy hàm dần vào đầu stack và thực hiện. Nếu gặp hàm async nó sẽ đẩy sang Web API để thực thi (Web API cũng là một stack). Khi nào thực thi xong nó sẽ push vào trong hàng đợi sự kiện (event queue). Đến khi callstack rỗng thì các event sẽ được lấy ra ở event queue và thực thi. Việc lặp đi lặp lại này tạo thành vòng lặp và người ta gọi là event loop

### QUESTION 3: Callback Function

Callback function được truyền vào hàm như một tham số. Đơn giản vậy thôi, nó sẽ được call khi hàm execute và từ back để nhấn mạnh cho nó là hàm được gọi lại. Việc có thể callback diễn ra trong JS bởi vì trong JS thì function like object. Việc thực hiện trong hàm lại như trong event loop

### QUESTION 4: Promise

### QUESTION 5: Async/await
