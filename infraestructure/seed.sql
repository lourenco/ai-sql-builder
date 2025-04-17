INSERT INTO users (name, email, username, avatar_url, role)
VALUES
('Ana Souza', 'ana@example.com', 'anasouza', 'https://example.com/avatars/ana.png', 'admin'),
('Bruno Lima', 'bruno@example.com', 'brunolima', 'https://example.com/avatars/bruno.png', 'user'),
('Carla Dias', 'carla@example.com', 'carladias', 'https://example.com/avatars/carla.png', 'user'),
('Diego Martins', 'diego@example.com', 'diegom', 'https://example.com/avatars/diego.png', 'user'),
('Eduarda Rocha', 'eduarda@example.com', 'eduardar', 'https://example.com/avatars/eduarda.png', 'user'),
('Felipe Silva', 'felipe@example.com', 'felipes', 'https://example.com/avatars/felipe.png', 'user'),
('Gustavo Nunes', 'gustavo@example.com', 'gustavon', 'https://example.com/avatars/gustavo.png', 'user'),
('Helena Costa', 'helena@example.com', 'helenac', 'https://example.com/avatars/helena.png', 'user'),
('Igor Mendes', 'igor@example.com', 'igorm', 'https://example.com/avatars/igor.png', 'user'),
('Jéssica Freitas', 'jessica@example.com', 'jessicaf', 'https://example.com/avatars/jessica.png', 'user');

INSERT INTO products (name, description, sku, price, quantity, category, image_url)
VALUES
('Notebook Lenovo', 'Notebook com 16GB RAM e SSD 512GB', 'NB-001', 3499.99, 50, 'Eletrônicos', 'https://example.com/products/notebook.png'),
('Smartphone Samsung', 'Smartphone Android com câmera tripla', 'SP-002', 2299.00, 100, 'Eletrônicos', 'https://example.com/products/smartphone.png'),
('Fone Bluetooth', 'Fone de ouvido sem fio com cancelamento de ruído', 'FN-003', 299.90, 200, 'Acessórios', 'https://example.com/products/fone.png'),
('Teclado Mecânico', 'Teclado RGB para gamers', 'TC-004', 450.00, 75, 'Periféricos', 'https://example.com/products/teclado.png'),
('Mouse Gamer', 'Mouse com 16000 DPI', 'MS-005', 199.90, 120, 'Periféricos', 'https://example.com/products/mouse.png'),
('Monitor 27"', 'Monitor 4K UHD', 'MN-006', 1799.00, 30, 'Monitores', 'https://example.com/products/monitor.png'),
('Cadeira Gamer', 'Cadeira ergonômica com apoio lombar', 'CD-007', 899.00, 25, 'Móveis', 'https://example.com/products/cadeira.png'),
('Webcam HD', 'Webcam Full HD 1080p', 'WB-008', 249.99, 80, 'Acessórios', 'https://example.com/products/webcam.png'),
('Hub USB-C', 'Hub com 4 portas USB 3.0', 'HB-009', 129.99, 60, 'Acessórios', 'https://example.com/products/hub.png'),
('Impressora Wi-Fi', 'Impressora multifuncional com conexão Wi-Fi', 'IP-010', 699.00, 40, 'Periféricos', 'https://example.com/products/impressora.png');

INSERT INTO sales (user_id, product_id, quantity, unit_price)
VALUES
(1, 1, 1, 3499.99),
(2, 2, 2, 2299.00),
(3, 3, 3, 299.90),
(4, 4, 1, 450.00),
(5, 5, 2, 199.90),
(6, 6, 1, 1799.00),
(7, 7, 1, 899.00),
(8, 8, 2, 249.99),
(9, 9, 3, 129.99),
(10, 10, 1, 699.00);
