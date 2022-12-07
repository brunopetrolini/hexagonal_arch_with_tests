create schema hexag;

create table hexag.card_transaction (
  card_number text,
  description text,
  amount numeric,
  currency text,
  date timestamp
);

insert into hexag.card_transaction (card_number, description, amount, currency, date)
values ('1234', 'Amazon do Brasil', 100, 'BRL', '2022-12-01:09:00:00');

insert into hexag.card_transaction (card_number, description, amount, currency, date)
values ('1234', 'Mercado Livre', 300, 'BRL', '2022-12-01:09:00:00');

insert into hexag.card_transaction (card_number, description, amount, currency, date)
values ('1234', 'Apple', 75, 'USD', '2022-12-01:09:00:00');

insert into hexag.card_transaction (card_number, description, amount, currency, date)
values ('1234', 'Magazine Luiza', 160, 'BRL', '2022-12-01:09:00:00');

insert into hexag.card_transaction (card_number, description, amount, currency, date)
values ('1234', 'Google', 50, 'USD', '2022-12-01:09:00:00');