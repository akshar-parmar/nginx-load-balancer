# Nginx Load Balancing Algorithms

Nginx supports various load balancing algorithms to efficiently distribute traffic across backend servers. Below are examples with **Server 1** and **Server 2**:

---

### 1. `ip_hash`
This algorithm ensures that requests from the same client IP are always sent to the same backend server.

```nginx
upstream myapp {
    ip_hash;
    server 192.168.1.101:3000;  # Server 1
    server 192.168.1.102:3000;  # Server 2
}
```


### 2. `least_conn`
This algorithm forwards requests to the server with the fewest active connections.

```nginx
upstream myapp {
    least_conn;
    server 192.168.1.101:3000;  # Server 1
    server 192.168.1.102:3000;  # Server 2
}
```


### 2. `Weighted Round Robin`
This algorithm distributes traffic based on server weights. Servers with higher weights receive more traffic.

```nginx
upstream myapp {
    server 192.168.1.101:3000 weight=3;  # Server 1 (High traffic: 3 parts)
    server 192.168.1.102:3000 weight=1;  # Server 2 (Low traffic: 1 part)
}
```
