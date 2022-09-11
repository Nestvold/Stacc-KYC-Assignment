from datetime import datetime
from MongoDB import insert_DB

def from_csv_to_json(filename):
    objects = []

    # Opening the file
    f = open(f'DB\data\{filename}.csv', 'r', encoding='UTF-8')
    # Reading the file
    content = f.readlines()

    # Skipping the first line with [1:]
    for line in content[1:]:
        line = line.replace('"', '')
        data = line.split(sep=',')

        # Creating a PEP-target
        pep_target = {
            'id': data[0],
            'schema': data[1],
            'name': data[2],
            'aliases': data[3],
            'birth_date': data[4],
            'countries': data[5],
            'addresses': data[6],
            'identifiers': data[7],
            'sanctions': data[8],
            'phones': data[9],
            'emails': data[10],
            'dataset': data[11],
            'last_seen': data[12],
            # , datetime.strptime(data[12], '%Y-%m-%d %H:%M:%S'),
            'first_seen':  data[13][:-1]
            # , datetime.strptime(data[13][:-1], '%Y-%m-%d %H:%M:%S')
        }
        objects.append(pep_target)

    return objects


def populate_db(fileName):
    data = from_csv_to_json(fileName)
    insert_DB(data)

# populate_db('pep')
