The state diagram of the application.
                                                           +---Parse error when loading
                                                           |
                                                           |
                                                           |
                                                           |
+------------------------+          +-------------------+  |  +--------------------+
| Edit Mode              |          | Home (Starting    |  |  | Parse Error Screen |
|                        <----------+       Screen)     +--+-->                    |
|                        |          |                   |     | (Since we value the|
|                        +--^------->                   |     | sanctity of the note we stop here
+------+-----------------+  |       +---+-----^---------+     +---------------------
       |      ^             |           |     |    ^
       |      |             |           |     |    |
       |      |             |           |     |    |
       |      |             |           |     |    |
       |      |             |           |     |    |
+------v------+-----------+ |           |     |    |
| Delete Mode             | |           |     |    +------------------+-----------+
|                         | | Importing |     |                       | Transient |
|                         | | Secrets   |     |                       |           |
|                         | | ----------+     |                       | Error     |
+------+------------------+ |           |     +-----Successful        |           |
       |                    |           |     |     Import            |           |
       |                    |           |     |                       +-----------+-
 +-----v------------------+ |           |     |                            ^
 | Confirm                | |           |     |                            |
 |                        +-+           |     |                            |
 |                        |          +--v-----+----------+                 |
 |                        |          | Import Dialog     +-----------------+------------ Transient Error(didn't
 |                        |          |                   |                               import anything)
 +------------------------+          |                   |
                                     |                   |
                                     +-------------------+