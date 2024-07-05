function decodedContent(content) {
            content = content.replace(/-/g, '+').replace(/_/g, '/');

            const padding = content.length % 4;
            if (padding) {
                content += '='.repeat(4 - padding);
            }

            const decodedString = atob(content);
            return decodeURIComponent(Array.prototype.map.call(decodedString, function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            const contentString = 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVzIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Ii9yZXNvdXJjZXMvY3NzL3N0eWxlLTEuY3NzIj4KICAgIDx0aXRsZT5Uw6lybWlub3MgeSBjb25kaWNpb25lczwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CiAgICA8ZGl2IHN0eWxlPSJ0ZXh0LWFsaWduOiBjZW50ZXI7Ij4KICAgICAgICA8YnI+CiAgICAgICAgPGgxPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC9oMT4KICAgICAgICA8YnI+CiAgICAgICAgPGRpdiBzdHlsZT0iYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmOyBwYWRkaW5nLWxlZnQ6IDEwcHg7Ij4KICAgICAgICAgICAgPHA+QWwgYWNjZWRlciB5IHV0aWxpemFyIGxvcyBzZXJ2aWNpb3Mgb2ZyZWNpZG9zIHBvciB3ZWJjb2RlbSwgYWNlcHRhcyBhZGhlcmlydGUgYSBsb3Mgc2lndWllbnRlcyB0w6lybWlub3MgeSBjb25kaWNpb25lczo8L3A+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBzdHlsZT0iYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmOyBwYWRkaW5nLWxlZnQ6IDEwcHg7Ij4KICAgICAgICAgICAgPHA+PHN0cm9uZz5Vc28gUmVzcG9uc2FibGU6PC9zdHJvbmc+IENvbXByb21pc28gZGUgdXRpbGl6YXIgbG9zIHNlcnZpY2lvcyBkZSBtYW5lcmEgw6l0aWNhIHkgbGVnYWwuIFByb2hpYmljacOzbiBkZSBhY3RpdmlkYWRlcyBxdWUgdmlvbGVuIGxhIGxleSBvIGFmZWN0ZW4gbGEgaW50ZWdyaWRhZCBkZWwgc2l0aW8geSBzdXMgdXN1YXJpb3MuPC9wPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgc3R5bGU9ImJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjsgcGFkZGluZy1sZWZ0OiAxMHB4OyI+CiAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpdmFjaWRhZDo8L3N0cm9uZz4gQ29tcHJvbWlzbyBkZSByZXNwZXRhciB5IHByb3RlZ2VyIGxhIHByaXZhY2lkYWQgZGVsIHVzdWFyaW8uIFJlY29waWxhY2nDs24gbGltaXRhZGEgZGUgaW5mb3JtYWNpw7NuIGFsIG5lY2VzYXJpbyBmdW5jaW9uYW1pZW50byBkZSBsb3Mgc2VydmljaW9zLjwvcD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IHN0eWxlPSJib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMDdiZmY7IHBhZGRpbmctbGVmdDogMTBweDsiPgogICAgICAgICAgICA8cD48c3Ryb25nPkNvbnRlbmlkbzo8L3N0cm9uZz4gUHJvdGVjY2nDs24gZGUgbG9zIGRlcmVjaG9zIGRlIGF1dG9yIGRlbCBjb250ZW5pZG8gcHJlc2VudGUgZW4gZWwgc2l0aW8uIFJlc3RyaWNjaW9uZXMgY29udHJhIGxhIGNvcGlhLCBkaXN0cmlidWNpw7NuIG8gbW9kaWZpY2FjacOzbiBubyBhdXRvcml6YWRhIGRlbCBjb250ZW5pZG8uPC9wPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgc3R5bGU9ImJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwN2JmZjsgcGFkZGluZy1sZWZ0OiAxMHB4OyI+CiAgICAgICAgICAgIDxwPjxzdHJvbmc+TW9kaWZpY2FjaW9uZXM6PC9zdHJvbmc+IEVzdG9zIHTDqXJtaW5vcyBlc3TDoW4gc3VqZXRvcyBhIGNhbWJpb3Mgc2luIHByZXZpbyBhdmlzby4gU2UgcmVjb21pZW5kYSByZXZpc2FyIHJlZ3VsYXJtZW50ZSBwYXJhIGVzdGFyIGFsIHRhbnRvIGRlIHBvc2libGVzIGFjdHVhbGl6YWNpb25lcy48L3A+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBzdHlsZT0iYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA3YmZmOyBwYWRkaW5nLWxlZnQ6IDEwcHg7Ij4KICAgICAgICAgICAgPHA+PHN0cm9uZz5BY2VwdGFjacOzbiBDb250aW51YWRhOjwvc3Ryb25nPiBFbCB1c28gY29udGludWFkbyBkZSBudWVzdHJvcyBzZXJ2aWNpb3MgY29uc3RpdHV5ZSBsYSBhY2VwdGFjacOzbiBkZSBsb3MgdMOpcm1pbm9zIHZpZ2VudGVzLiBHcmFjaWFzIHBvciBlbGVnaXIgd2ViY29kZW0uIFNpIHRpZW5lcyBhbGd1bmEgcHJlZ3VudGEgc29icmUgZXN0b3MgdMOpcm1pbm9zLCBubyBkdWRlcyBlbiBjb250YWN0YXJub3MuPC9wPgogICAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8c2NyaXB0IHNyYz0iL3Jlc291cmNlcy9qcy9zY3JpcHQtMzEuanMiPjwvc2NyaXB0Pgo8L2JvZHk+CjwvaHRtbD4';
            const decodedHtml = decodedContent(contentString);
            document.getElementById('decodedContent').innerHTML = decodedHtml;
        });
