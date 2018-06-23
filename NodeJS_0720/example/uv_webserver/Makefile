webserver: webserver.c libuv/uv.a http-parser/http_parser.o
	gcc -o webserver webserver.c libuv/uv.a http-parser/http_parser.o -lrt -lm

libuv/uv.a:
	make -C libuv

http-parser/http_parser.o:
	make -C http-parser http_parser.o

clean:
	make -C http-parser clean
	make -C libuv distclean
	rm webserver
